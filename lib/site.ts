export const siteConfig = {
  name: "Mugnee IT Solutions",
  shortName: "Mugnee",
  phoneDisplay: "+880 1958-645415",
  phoneHref: "tel:+8801958645415",
  whatsappDisplay: "+880 1958-645415",
  whatsappNumber: "8801958645415",
  email: "hello@mugneeit.com",
  location: "Dhaka, Bangladesh"
};

export function createWhatsAppLink(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}
