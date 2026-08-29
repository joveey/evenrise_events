"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import { CONTACT, getWhatsAppUrl } from "@/lib/constants";
import { ALL_CATEGORIES } from "@/data/events";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import { cn } from "@/lib/utils";

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: "How far in advance should I book?",
    answer: "For large-scale corporate events or weddings, we recommend reaching out 6-9 months in advance. For smaller gatherings or seminars, 2-3 months is usually sufficient to ensure seamless planning.",
  },
  {
    question: "Do you handle virtual and hybrid events?",
    answer: "Absolutely. We provide end-to-end production for virtual and hybrid events, including multi-camera live streaming, virtual engagement platforms, and broadcast-quality AV setups.",
  },
  {
    question: "What areas do you serve?",
    answer: "While we are based in Jakarta, our team regularly organizes events across Indonesia — including Bali, Surabaya, and Bandung — and we are open to managing international destination events.",
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whatsappUrl = getWhatsAppUrl(
    "Hi EvenRise Events, I'd like to discuss planning an event with your team."
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col flex-1">
      {/* ── Page Header ─────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pb-20 pt-36"
        style={{
          background: "linear-gradient(155deg, #091526 0%, #0D1E35 50%, #16294A 100%)",
        }}
        aria-label="Contact page header"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "180px 180px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 10%, rgba(201,162,75,0.45) 50%, transparent 90%)",
          }}
          aria-hidden="true"
        />

        <div className="container-site relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-body text-[11px] text-white/40">
              <li>
                <Link href="/" className="transition-colors hover:text-gold">Home</Link>
              </li>
              <li aria-hidden="true" className="text-white/25">/</li>
              <li className="text-white/60">Contact Us</li>
            </ol>
          </nav>

          <span
            className="mb-7 block h-px w-14"
            style={{
              background: "linear-gradient(90deg, #C9A24B 0%, rgba(201,162,75,0.15) 100%)",
            }}
            aria-hidden="true"
          />

          <h1 className="font-heading text-5xl font-light leading-tight text-white md:text-6xl lg:text-7xl">
            Let&apos;s{" "}
            <em
              className="not-italic"
              style={{
                background: "linear-gradient(135deg, #F0D882 0%, #C9A24B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Talk
            </em>
          </h1>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-white/55">
            Whether you have a fully formed brief or just the seed of an idea, we&apos;re here to help bring your next event to life.
          </p>
        </div>
      </section>

      {/* ── Main Content ───────────────────────────────────────────────────── */}
      <section className="section-padding bg-cream relative flex-1">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            
            {/* ── Left Column (Contact Info) ─────────────────────────────── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="lg:col-span-5 flex flex-col"
            >
              <motion.div variants={fadeUp} className="mb-8">
                <h2 className="font-heading text-3xl font-semibold text-navy">Get in Touch</h2>
                <p className="mt-3 font-body text-[0.9375rem] leading-relaxed text-text-secondary">
                  Reach out to our team directly through your preferred channel. We aim to respond to all inquiries within 24 business hours.
                </p>
              </motion.div>

              <motion.ul variants={stagger} className="flex flex-col gap-6 mb-10">
                <motion.li variants={fadeUp} className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-subtle text-gold">
                    <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-medium text-navy">WhatsApp</h3>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block font-body text-sm text-text-secondary transition-colors hover:text-gold">
                      {CONTACT.phone}
                    </a>
                  </div>
                </motion.li>

                <motion.li variants={fadeUp} className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-subtle text-gold">
                    <Mail className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-medium text-navy">Email</h3>
                    <a href={`mailto:${CONTACT.email}`} className="mt-1 block font-body text-sm text-text-secondary transition-colors hover:text-gold">
                      {CONTACT.email}
                    </a>
                  </div>
                </motion.li>

                <motion.li variants={fadeUp} className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-subtle text-gold">
                    <MapPin className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-medium text-navy">Office</h3>
                    <p className="mt-1 font-body text-sm leading-relaxed text-text-secondary">
                      {CONTACT.address.street}<br />
                      {CONTACT.address.city}, {CONTACT.address.province} {CONTACT.address.zip}
                    </p>
                  </div>
                </motion.li>

                <motion.li variants={fadeUp} className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-subtle text-gold">
                    <Clock className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-medium text-navy">Business Hours</h3>
                    <p className="mt-1 font-body text-sm leading-relaxed text-text-secondary">
                      Mon – Fri: 09:00 – 18:00 WIB<br />
                      Sat – Sun: By appointment
                    </p>
                  </div>
                </motion.li>
              </motion.ul>

              <motion.div variants={fadeUp}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={2} />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </motion.div>

            {/* ── Right Column (Form) ────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <div className="rounded-2xl border border-cream-dark bg-white p-8 shadow-[var(--shadow-card)] sm:p-10">
                <h2 className="mb-6 font-heading text-2xl font-semibold text-navy">Send an Enquiry</h2>
                
                {submitStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                      <CheckCircle2 className="h-8 w-8" strokeWidth={2} />
                    </div>
                    <h3 className="mb-2 font-heading text-2xl font-semibold text-navy">Message Sent!</h3>
                    <p className="font-body text-[0.9375rem] text-text-secondary">
                      Thank you for reaching out. A member of our team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitStatus("idle")}
                      className="mt-6 font-body text-sm font-medium text-gold transition-colors hover:text-navy underline underline-offset-4"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {submitStatus === "error" && (
                      <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2} />
                        <div className="font-body text-sm">
                          <p className="font-medium">Failed to send message</p>
                          <p className="mt-1 opacity-90">{errorMessage}</p>
                          <a href={whatsappUrl} className="mt-2 inline-block font-medium underline transition-opacity hover:opacity-80">
                            Try reaching us on WhatsApp instead
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="font-body text-[11px] font-medium uppercase tracking-widest text-text-muted">
                          Full Name *
                        </label>
                        <input
                          {...register("name")}
                          id="name"
                          className={cn(
                            "w-full rounded-xl border bg-cream/30 px-4 py-3 font-body text-sm text-navy outline-none transition-colors focus:bg-white focus:ring-2",
                            errors.name ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-navy/10 focus:border-gold/60 focus:ring-gold/20"
                          )}
                          placeholder="Jane Doe"
                        />
                        {errors.name && <p className="font-body text-xs text-red-500">{errors.name.message}</p>}
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="font-body text-[11px] font-medium uppercase tracking-widest text-text-muted">
                          Email Address *
                        </label>
                        <input
                          {...register("email")}
                          id="email"
                          type="email"
                          className={cn(
                            "w-full rounded-xl border bg-cream/30 px-4 py-3 font-body text-sm text-navy outline-none transition-colors focus:bg-white focus:ring-2",
                            errors.email ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-navy/10 focus:border-gold/60 focus:ring-gold/20"
                          )}
                          placeholder="jane@example.com"
                        />
                        {errors.email && <p className="font-body text-xs text-red-500">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {/* Phone */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="font-body text-[11px] font-medium uppercase tracking-widest text-text-muted">
                          Phone Number (Optional)
                        </label>
                        <input
                          {...register("phone")}
                          id="phone"
                          type="tel"
                          className="w-full rounded-xl border border-navy/10 bg-cream/30 px-4 py-3 font-body text-sm text-navy outline-none transition-colors focus:border-gold/60 focus:bg-white focus:ring-2 focus:ring-gold/20"
                          placeholder="+62 812-3456-7890"
                        />
                      </div>

                      {/* Event Type */}
                      <div className="space-y-2">
                        <label htmlFor="eventType" className="font-body text-[11px] font-medium uppercase tracking-widest text-text-muted">
                          Event Type *
                        </label>
                        <div className="relative">
                          <select
                            {...register("eventType")}
                            id="eventType"
                            className={cn(
                              "w-full appearance-none rounded-xl border bg-cream/30 px-4 py-3 font-body text-sm text-navy outline-none transition-colors focus:bg-white focus:ring-2",
                              errors.eventType ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-navy/10 focus:border-gold/60 focus:ring-gold/20"
                            )}
                          >
                            <option value="">Select an event type...</option>
                            {ALL_CATEGORIES.map((cat) => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                            <option value="Other">Other / Not Sure</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40" />
                        </div>
                        {errors.eventType && <p className="font-body text-xs text-red-500">{errors.eventType.message}</p>}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="font-body text-[11px] font-medium uppercase tracking-widest text-text-muted">
                        Message / Event Details *
                      </label>
                      <textarea
                        {...register("message")}
                        id="message"
                        rows={5}
                        className={cn(
                          "w-full resize-none rounded-xl border bg-cream/30 px-4 py-3 font-body text-sm text-navy outline-none transition-colors focus:bg-white focus:ring-2",
                          errors.message ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-navy/10 focus:border-gold/60 focus:ring-gold/20"
                        )}
                        placeholder="Tell us a bit about your event (estimated date, guest count, location, goals)..."
                      />
                      {errors.message && <p className="font-body text-xs text-red-500">{errors.message.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin text-navy" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Enquiry
                          <Send className="h-4 w-4 text-navy transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2} />
                        </>
                      )}
                    </button>
                    
                    <p className="mt-4 text-center font-body text-[11px] text-text-muted">
                      Your information is kept strictly confidential.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ────────────────────────────────────────────────────── */}
      <section className="border-t border-cream-dark bg-cream py-20 lg:py-24" aria-labelledby="faq-heading">
        <div className="container-site max-w-3xl">
          <div className="mb-10 text-center">
            <h2 id="faq-heading" className="font-heading text-3xl font-semibold text-navy">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="rounded-xl border border-navy/5 bg-white overflow-hidden transition-shadow hover:shadow-sm">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-lg font-medium text-navy">{faq.question}</span>
                    <ChevronDown className={cn("h-5 w-5 text-gold transition-transform duration-200 shrink-0", isOpen && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-0 font-body text-sm leading-relaxed text-text-secondary border-t border-navy/5 mt-1">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
