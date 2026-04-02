"use client";

import { useNewsletter } from "@/hooks/use-newsletter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsletterForm() {
  const { email, setEmail, status, handleSubmit } = useNewsletter();

  if (status === "success") {
    return (
      <p className="text-sm text-amber-400">
        You&apos;re in! Thanks for subscribing.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
      <Input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === "loading"}
        className="flex-1 border-white/10 bg-white/[0.04] text-white placeholder:text-white/30 focus-visible:ring-amber-400/50"
      />
      <Button
        type="submit"
        disabled={status === "loading"}
        className="rounded-xl bg-amber-400 font-medium text-black hover:bg-amber-300"
      >
        {status === "loading" ? "..." : "Subscribe"}
      </Button>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-400">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
