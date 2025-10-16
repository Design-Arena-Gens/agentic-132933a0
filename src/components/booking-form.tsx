"use client";

import { ChangeEvent, FormEvent, useState } from "react";

type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  preferredTime: string;
};

const defaultData: BookingFormData = {
  name: "",
  email: "",
  phone: "",
  interest: "Small Group Strength Pods",
  message: "",
  preferredTime: "Morning"
};

export function BookingForm() {
  const [form, setForm] = useState(defaultData);
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleChange = (key: keyof BookingFormData) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent("Ketch Wellness Soft Opening Consultation");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nPrimary Interest: ${form.interest}\nPreferred Time: ${form.preferredTime}\nMessage: ${form.message}`
    );
    window.location.href = `mailto:hello@ketchwellness.com?subject=${subject}&body=${body}`;
    setStatus("success");
    setForm(defaultData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block text-sm font-semibold text-ketch-deep">
          Full Name
          <input
            required
            value={form.name}
            onChange={handleChange("name")}
            type="text"
            className="mt-2 w-full rounded-xl border border-ketch-deep/20 bg-white px-4 py-3 text-sm text-ketch-deep shadow-sm focus:border-ketch-sage focus:outline-none focus:ring-2 focus:ring-ketch-sage/30"
          />
        </label>
        <label className="block text-sm font-semibold text-ketch-deep">
          Email
          <input
            required
            value={form.email}
            onChange={handleChange("email")}
            type="email"
            className="mt-2 w-full rounded-xl border border-ketch-deep/20 bg-white px-4 py-3 text-sm text-ketch-deep shadow-sm focus:border-ketch-sage focus:outline-none focus:ring-2 focus:ring-ketch-sage/30"
          />
        </label>
        <label className="block text-sm font-semibold text-ketch-deep">
          Phone
          <input
            required
            value={form.phone}
            onChange={handleChange("phone")}
            type="tel"
            className="mt-2 w-full rounded-xl border border-ketch-deep/20 bg-white px-4 py-3 text-sm text-ketch-deep shadow-sm focus:border-ketch-sage focus:outline-none focus:ring-2 focus:ring-ketch-sage/30"
          />
        </label>
        <label className="block text-sm font-semibold text-ketch-deep">
          Preferred Time of Day
          <select
            value={form.preferredTime}
            onChange={handleChange("preferredTime")}
            className="mt-2 w-full rounded-xl border border-ketch-deep/20 bg-white px-4 py-3 text-sm text-ketch-deep shadow-sm focus:border-ketch-sage focus:outline-none focus:ring-2 focus:ring-ketch-sage/30"
          >
            <option>Morning</option>
            <option>Midday</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </label>
      </div>
      <label className="block text-sm font-semibold text-ketch-deep">
        Primary Interest
        <select
          value={form.interest}
          onChange={handleChange("interest")}
          className="mt-2 w-full rounded-xl border border-ketch-deep/20 bg-white px-4 py-3 text-sm text-ketch-deep shadow-sm focus:border-ketch-sage focus:outline-none focus:ring-2 focus:ring-ketch-sage/30"
        >
          <option>Small Group Strength Pods</option>
          <option>Signature Studio Classes</option>
          <option>Private Transformations</option>
          <option>Corporate / Home Install</option>
        </select>
      </label>
      <label className="block text-sm font-semibold text-ketch-deep">
        Message
        <textarea
          value={form.message}
          onChange={handleChange("message")}
          rows={5}
          placeholder="Tell us about your goals, timelines, or any medical considerations."
          className="mt-2 w-full rounded-xl border border-ketch-deep/20 bg-white px-4 py-3 text-sm text-ketch-deep shadow-sm focus:border-ketch-sage focus:outline-none focus:ring-2 focus:ring-ketch-sage/30"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-ketch-sage px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-subtle transition hover:bg-ketch-deep"
      >
        Request Consultation
      </button>
      {status === "success" ? (
        <p className="text-center text-sm text-ketch-sage">
          Thank you. Your email client will open momentarily—complete the draft to finalize your request.
        </p>
      ) : null}
    </form>
  );
}
