import SectionLabel from "@/components/ui/section-label";

export default function AboutStrip() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-4 pb-20 sm:px-6 md:px-8"
    >
      <div className="flex flex-col gap-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:flex-row sm:items-start sm:gap-8">
        <div className="flex flex-shrink-0 justify-center sm:justify-start">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-xl font-bold text-black"
            style={{ boxShadow: "0 0 40px rgba(245, 158, 11, 0.15)" }}
          >
            UE
          </div>
        </div>

        <div className="flex flex-col gap-3 text-center sm:text-left">
          <SectionLabel>About</SectionLabel>
          <p className="text-sm leading-relaxed text-white/60">
            Hi, I&apos;m Ugur — a solo developer building apps I wish existed.
            UE Software is my studio for thoughtful, privacy-first iOS and
            Android apps. I believe great software should be simple, honest, and
            respect the people using it.
          </p>
          <a
            href="mailto:hello@uesoftware.com"
            className="inline-flex items-center gap-1 text-xs text-amber-400 transition-opacity hover:opacity-80 sm:self-start"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}
