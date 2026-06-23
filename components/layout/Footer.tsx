import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { Container } from "@/components/common/Container";
import { createWhatsAppLink, siteConfig } from "@/lib/site";

const quickLinks = [
  ["Website Demos", "#demos"],
  ["Packages", "#packages"],
  ["Custom Website", "#custom"]
];

const supportLinks = ["How It Works", "FAQ", "Terms of Service", "Privacy Policy", "Refund Policy"];

export function Footer() {
  const whatsappLink = createWhatsAppLink(
    "Hi Mugnee IT Solutions, I want to launch a website."
  );

  return (
    <footer className="relative overflow-hidden bg-navy-950 py-10 text-white">
      <Container wide>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.7fr_0.8fr_1fr]">
          <div>
            <Link href="#demos" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/10 text-blue-200 shadow-glow">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xl font-extrabold">Mugnee</span>
                <span className="block text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                  IT Solutions
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
              We build modern, fast and beautiful websites that help your business grow.
            </p>
            <div className="mt-5 flex gap-2 text-slate-300">
              {[Facebook, Linkedin, Youtube].map((Icon, index) => (
                <span
                  key={index}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5"
                >
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold">Quick Links</h3>
            <ul className="mt-4 grid gap-2 text-sm text-slate-300">
              {quickLinks.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold">Support</h3>
            <ul className="mt-4 grid gap-2 text-sm text-slate-300">
              {supportLinks.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold">Contact Info</h3>
            <ul className="mt-4 grid gap-3 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-300" />
                <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-green-300" />
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-300" />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-blue-300" />
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 Mugnee IT Solutions. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
