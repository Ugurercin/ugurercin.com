import ContactForm from "@/components/ui/contact-form";
import { SOCIAL_LINKS } from "@/constants/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with UE Software.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">

      {/* Header */}
      <div className="mb-12">
        <p className="text-xs font-medium uppercase tracking-widest text-amber-400 mb-3">
          Get in touch
        </p>
        <h1 className="text-4xl font-semibold text-white tracking-tight mb-4">
          Let's talk.
        </h1>
        <p className="text-sm text-white/50 leading-relaxed max-w-md">
          Have a question about one of the apps, a bug to report, or just want to say hi?
          Drop me a message and I'll get back to you.
        </p>
      </div>

      {/* Social quick links */}
      <div className="flex gap-3 mb-10">
        {SOCIAL_LINKS.map(link => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full text-xs font-medium text-white/50
              border border-white/[0.08] hover:border-white/20 hover:text-white/80
              transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-white/[0.06] mb-10" />

      {/* Form */}
      <ContactForm />

    </main>
  );
}
