"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { env } from "@/lib/env";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

const fieldBase =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${env.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-pink-soft/40 p-10 text-center">
        <p className="mb-2 font-display text-2xl">Cảm ơn bạn! 💌</p>
        <p className="text-ink/75">
          Chúng tôi sẽ liên hệ trong 24h tới. Trong lúc chờ, hãy ghé thăm
          Portfolio nhé!
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-gold underline underline-offset-4"
        >
          Gửi yêu cầu khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-ink/70">Họ tên *</span>
          <input name="name" required className={fieldBase} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-ink/70">Số điện thoại *</span>
          <input name="phone" type="tel" required className={fieldBase} />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-sm text-ink/70">Email</span>
        <input name="email" type="email" className={fieldBase} />
      </label>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-ink/70">Ngày dự kiến</span>
          <input name="event_date" type="date" className={fieldBase} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-ink/70">Địa điểm</span>
          <input
            name="location"
            placeholder="TP.HCM, Đà Lạt…"
            className={fieldBase}
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-sm text-ink/70">Yêu cầu / Ghi chú</span>
        <textarea
          name="message"
          rows={4}
          className={cn(fieldBase, "resize-none")}
          placeholder="Mô tả concept bạn đang hình dung, ngân sách dự kiến…"
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Có lỗi gửi form. Vui lòng thử lại hoặc liên hệ qua Zalo.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="justify-self-start"
      >
        {status === "submitting" ? "Đang gửi…" : "Gửi yêu cầu tư vấn"}
      </Button>
      <p className="text-xs text-ink/50">
        Chúng tôi sẽ liên hệ trong 24h làm việc.
      </p>
    </form>
  );
}
