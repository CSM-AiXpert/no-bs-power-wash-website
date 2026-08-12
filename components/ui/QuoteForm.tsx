"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/data/site";
import { services } from "@/lib/data/services";

/**
 * Quote form: no backend. Composes a prefilled email (and offers SMS)
 * so every submission lands directly with Bob.
 */
export default function QuoteForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const body = encodeURIComponent(
    `Quote request from nobspowerwash.com\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\n\nDetails:\n${form.message}`
  );
  const subject = encodeURIComponent(`Free quote request: ${form.service || "exterior cleaning"}`);

  return (
    <form
      className="rounded-2xl border glass p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="mb-1.5 block text-sm font-semibold text-chrome">Name</label>
          <input id="q-name" required value={form.name} onChange={set("name")} autoComplete="name"
            className="w-full rounded-lg border glass px-4 py-3 text-white placeholder:text-mist/60 focus:border-electric" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="q-phone" className="mb-1.5 block text-sm font-semibold text-chrome">Phone</label>
          <input id="q-phone" required type="tel" value={form.phone} onChange={set("phone")} autoComplete="tel"
            className="w-full rounded-lg border glass px-4 py-3 text-white placeholder:text-mist/60 focus:border-electric" placeholder="Best number to reach you" />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="q-service" className="mb-1.5 block text-sm font-semibold text-chrome">What do you need cleaned?</label>
        <select id="q-service" required value={form.service} onChange={set("service")}
          className="w-full cursor-pointer rounded-lg border glass px-4 py-3 text-white focus:border-electric">
          <option value="" disabled>Choose a service</option>
          {services.map((s) => <option key={s.slug} value={s.shortName}>{s.shortName}</option>)}
          <option value="Something else">Something else</option>
        </select>
      </div>
      <div className="mt-5">
        <label htmlFor="q-msg" className="mb-1.5 block text-sm font-semibold text-chrome">Property details</label>
        <textarea id="q-msg" rows={4} value={form.message} onChange={set("message")}
          className="w-full rounded-lg border glass px-4 py-3 text-white placeholder:text-mist/60 focus:border-electric"
          placeholder="Town, property type, what you are seeing (green siding, black roof streaks, dirty driveway...)" />
      </div>
      <button type="submit" className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-electric/90 px-6 py-3.5 text-base font-bold text-ink transition-colors duration-200 hover:bg-white">
        <Send className="h-4 w-4" aria-hidden="true" /> Send My Quote Request
      </button>
      {sent && (
        <p className="mt-3 text-center text-sm text-electric">
          Your email app should have opened with the request prefilled. Prefer texting? <a className="underline" href={site.smsHref}>Text {site.phone}</a> instead.
        </p>
      )}
      <p className="mt-3 text-center text-xs text-mist">Your request goes directly to the No BS team for a prompt response.</p>
    </form>
  );
}
