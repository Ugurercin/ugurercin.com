"use client";
import { useContact } from "@/hooks/use-contact";

export default function ContactForm() {
  const { fields, setField, status, handleSubmit } = useContact();

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-8 text-center">
        <div className="text-2xl mb-3">🌱</div>
        <p className="text-sm font-medium text-green-400">Message sent!</p>
        <p className="text-xs text-white/40 mt-1">I'll get back to you as soon as I can.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Your name"
          value={fields.name}
          onChange={(e) => setField("name", e.target.value)}
          className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-2.5
            text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-amber-400/40"
        />
        <input
          type="email"
          placeholder="your@email.com"
          value={fields.email}
          onChange={(e) => setField("email", e.target.value)}
          className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-2.5
            text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-amber-400/40"
        />
      </div>
      <textarea
        rows={4}
        placeholder="Your message..."
        value={fields.message}
        onChange={(e) => setField("message", e.target.value)}
        className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] px-4 py-2.5
          text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-amber-400/40 resize-none"
      />
      {status === "error" && (
        <p className="text-xs text-red-400">Something went wrong. Please try again.</p>
      )}
      <button
        onClick={handleSubmit}
        disabled={status === "loading" || !fields.name || !fields.email || !fields.message}
        className="self-start px-6 py-3 rounded-xl bg-amber-400 text-black text-sm font-medium
          hover:bg-amber-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send message →"}
      </button>
    </div>
  );
}
