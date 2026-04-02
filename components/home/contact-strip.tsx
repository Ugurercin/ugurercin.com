import Link from "next/link";

export default function ContactStrip() {
  return (
    <section className="px-4 sm:px-6 mb-16">
      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-8 sm:px-10
        flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-amber-400 mb-2">
            Say hello
          </p>
          <h2 className="text-xl font-semibold text-white tracking-tight mb-1">
            Have a question or idea?
          </h2>
          <p className="text-sm text-white/40">
            I read every message. Usually reply within a day.
          </p>
        </div>

        <Link
          href="/contact"
          className="shrink-0 px-6 py-3 rounded-xl bg-amber-400 text-black text-sm
            font-medium hover:bg-amber-300 transition-colors whitespace-nowrap"
        >
          Get in touch →
        </Link>

      </div>
    </section>
  );
}
