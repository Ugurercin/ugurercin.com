"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

interface Fields {
  name: string;
  email: string;
  message: string;
}

export function useContact() {
  const [fields, setFields] = useState<Fields>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const setField = (key: keyof Fields, value: string) =>
    setFields((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return { fields, setField, status, handleSubmit };
}
