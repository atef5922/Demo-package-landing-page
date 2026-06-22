"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { websitePackages } from "@/data/packages";
import { createWhatsAppLink, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  businessType: z.string().min(1, "Please select a business type"),
  selectedPackage: z.string().optional(),
  message: z.string().min(8, "Please write a short message")
});

type ContactFormValues = z.infer<typeof contactSchema>;

const businessTypes = [
  "Ecommerce",
  "Business / Corporate",
  "Portfolio",
  "Education",
  "Healthcare",
  "Restaurant",
  "Real Estate",
  "Custom Website"
];

const contactCards = [
  {
    label: "Call Us",
    value: siteConfig.phoneDisplay,
    href: siteConfig.phoneHref,
    icon: Phone,
    className: "text-blue-600 bg-blue-50"
  },
  {
    label: "WhatsApp",
    value: siteConfig.whatsappDisplay,
    href: createWhatsAppLink("Hi Mugnee IT Solutions, I want to launch a website."),
    icon: MessageCircle,
    className: "text-green-600 bg-green-50"
  },
  {
    label: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    className: "text-violet-600 bg-violet-50"
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: "#contact",
    icon: MapPin,
    className: "text-slate-700 bg-slate-100"
  }
];

export function ContactSection() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      businessType: "",
      selectedPackage: "",
      message: ""
    }
  });

  const onSubmit = async () => {
    toast.success("Your request has been received. Mugnee IT Solutions will contact you soon.");
    reset();
  };

  return (
    <section id="contact" className="section-shell bg-white py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="Get In Touch"
          title="Ready to Launch Your Website?"
          subtitle="Let’s discuss your project. We are here to help you choose the right demo, package, or custom solution."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="grid content-start gap-4"
          >
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-card"
              >
                <span className={cn("grid h-12 w-12 place-items-center rounded-2xl", card.className)}>
                  <card.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-slate-500">{card.label}</span>
                  <span className="mt-1 block font-extrabold text-slate-950 group-hover:text-blue-700">
                    {card.value}
                  </span>
                </span>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-card sm:p-7"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-700">Your Name</span>
                <input
                  {...register("name")}
                  className="h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  placeholder="Enter your name"
                />
                {errors.name ? <span className="text-xs font-semibold text-red-600">{errors.name.message}</span> : null}
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-700">Phone / WhatsApp</span>
                <input
                  {...register("phone")}
                  className="h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  placeholder="Enter your phone number"
                />
                {errors.phone ? <span className="text-xs font-semibold text-red-600">{errors.phone.message}</span> : null}
              </label>

              <div className="grid gap-2">
                <span className="text-sm font-bold text-slate-700">Business Type</span>
                <Controller
                  control={control}
                  name="businessType"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.businessType ? (
                  <span className="text-xs font-semibold text-red-600">
                    {errors.businessType.message}
                  </span>
                ) : null}
              </div>

              <div className="grid gap-2">
                <span className="text-sm font-bold text-slate-700">Selected Package</span>
                <Controller
                  control={control}
                  name="selectedPackage"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select package" />
                      </SelectTrigger>
                      <SelectContent>
                        {websitePackages.map((item) => (
                          <SelectItem key={item.id} value={item.name}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>

            <label className="mt-5 grid gap-2">
              <span className="text-sm font-bold text-slate-700">Message</span>
              <textarea
                {...register("message")}
                className="min-h-[130px] resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                placeholder="Tell us about your project..."
              />
              {errors.message ? (
                <span className="text-xs font-semibold text-red-600">{errors.message.message}</span>
              ) : null}
            </label>

            <Button type="submit" size="lg" className="mt-6 w-full" disabled={isSubmitting}>
              Send Request
              <Send className="h-4 w-4" />
            </Button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
