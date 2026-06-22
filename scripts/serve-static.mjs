import { createServer } from "node:http";
import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd(), "out");
const preferredPort = Number(process.env.PORT || 3000);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8"
};

async function pathExists(filePath) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function safeJoin(basePath, requestPath) {
  const normalizedPath = path.normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
  return path.join(basePath, normalizedPath);
}

if (!(await pathExists(root))) {
  console.error("Static export not found. Run `npm run build` first.");
  process.exit(1);
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? "/", `http://${req.headers.host ?? "localhost"}`);
    let pathname = decodeURIComponent(url.pathname);

    if (pathname.endsWith("/")) {
      pathname += "index.html";
    }

    let filePath = safeJoin(root, pathname);

    if (!(await pathExists(filePath)) && !path.extname(filePath)) {
      const htmlPath = `${filePath}.html`;
      if (await pathExists(htmlPath)) {
        filePath = htmlPath;
      }
    }

    if (!(await pathExists(filePath))) {
      const notFoundPath = safeJoin(root, "404.html");
      if (await pathExists(notFoundPath)) {
        res.writeHead(404, { "Content-Type": contentTypes[".html"] });
        res.end(await readFile(notFoundPath));
        return;
      }

      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 Not Found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = contentTypes[ext] ?? "application/octet-stream";
    const file = await readFile(filePath);

    res.writeHead(200, { "Content-Type": contentType });
    res.end(file);
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(`Internal Server Error\n${String(error)}`);
  }
});

function listen(port, attemptsLeft = 10) {
  const handleListening = () => {
    const address = server.address();
    const activePort =
      address && typeof address === "object" && "port" in address ? address.port : port;
    console.log(`Static site running at http://localhost:${activePort}`);
  };

  const handleError = (error) => {
    server.removeListener("listening", handleListening);

    if (error && typeof error === "object" && "code" in error && error.code === "EADDRINUSE") {
      if (attemptsLeft <= 0) {
        console.error(`No available port found starting from ${preferredPort}.`);
        process.exit(1);
      }

      listen(port + 1, attemptsLeft - 1);
      return;
    }

    console.error(error);
    process.exit(1);
  };

  server.once("error", handleError);
  server.once("listening", handleListening);
  server.listen(port);
}

listen(preferredPort);
