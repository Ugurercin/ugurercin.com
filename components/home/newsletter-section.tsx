import SectionLabel from "@/components/ui/section-label";
import NewsletterForm from "@/components/ui/newsletter-form";

export default function NewsletterSection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-20 sm:px-6 md:px-8">
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-10 text-center">
        <SectionLabel>Stay in the loop</SectionLabel>
        <p className="max-w-sm text-sm text-white/50">
          New apps, updates, and thoughts from UE Software — delivered
          occasionally.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}
