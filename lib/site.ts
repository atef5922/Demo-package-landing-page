export const siteConfig = {
  name: "Mugnee IT Solutions",
  shortName: "Mugnee",
  phoneDisplay: "+880 1234-567890",
  phoneHref: "tel:+8801234567890",
  whatsappDisplay: "+880 1234-567890",
  whatsappNumber: "8801234567890",
  email: "hello@mugneeit.com",
  location: "Dhaka, Bangladesh"
};

export function createWhatsAppLink(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}
