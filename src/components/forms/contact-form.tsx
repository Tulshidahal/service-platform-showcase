"use client";

import { useState } from "react";
import { Field, inputClassName, StatusMessage } from "@/components/forms/field";
import {
  contactFormSchema,
  getFieldErrors,
  type ContactFormValues,
} from "@/lib/validation";

const initialValues: ContactFormValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  topic: "",
  message: "",
  consent: true,
  company: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = <K extends keyof ContactFormValues>(
    field: K,
    value: ContactFormValues[K],
  ) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    const parsedValues = contactFormSchema.safeParse(values);

    if (!parsedValues.success) {
      const fieldErrors = getFieldErrors(parsedValues.error);
      setErrors(fieldErrors);
      setStatus({
        type: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsedValues.data),
      });

      const payload = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? "Something went wrong.");
      }

      setValues(initialValues);
      setStatus({
        type: "success",
        message: payload.message ?? "Message received successfully.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not send your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-border bg-surface p-6 shadow-[var(--shadow)] md:p-8"
      noValidate
    >
      <div className="rounded-[1.6rem] bg-surface-soft p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Contact Form Demo
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
          Simple typed contact flow
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          This shows a straightforward form pattern with client-side validation,
          API submission, and user feedback states.
        </p>
      </div>

      <input
        id="company"
        name="company"
        value={values.company}
        onChange={(event) => updateField("company", event.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Field
          label="Full Name"
          name="fullName"
          error={errors.fullName}
          required
          input={
            <input
              id="fullName"
              value={values.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              className={`${inputClassName} ${errors.fullName ? "input-error" : ""}`}
              placeholder="Jordan Lee"
            />
          }
        />
        <Field
          label="Email"
          name="email"
          error={errors.email}
          required
          input={
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={(event) => updateField("email", event.target.value)}
              className={`${inputClassName} ${errors.email ? "input-error" : ""}`}
              placeholder="jordan@example.com"
            />
          }
        />
        <Field
          label="Phone Number"
          name="phoneNumber"
          error={errors.phoneNumber}
          required
          input={
            <input
              id="phoneNumber"
              value={values.phoneNumber}
              onChange={(event) => updateField("phoneNumber", event.target.value)}
              className={`${inputClassName} ${errors.phoneNumber ? "input-error" : ""}`}
              placeholder="(555) 010-2026"
            />
          }
        />
        <Field
          label="Topic"
          name="topic"
          error={errors.topic}
          hint="Optional"
          input={
            <input
              id="topic"
              value={values.topic}
              onChange={(event) => updateField("topic", event.target.value)}
              className={`${inputClassName} ${errors.topic ? "input-error" : ""}`}
              placeholder="Code review, portfolio question, feature request"
            />
          }
        />
      </div>

      <div className="mt-5">
        <Field
          label="Message"
          name="message"
          error={errors.message}
          required
          input={
            <textarea
              id="message"
              value={values.message}
              onChange={(event) => updateField("message", event.target.value)}
              className={`${inputClassName} min-h-36 resize-y ${errors.message ? "input-error" : ""}`}
              placeholder="Tell us what you want to discuss."
            />
          }
        />
      </div>

      {status.type !== "idle" ? (
        <div className="mt-5">
          <StatusMessage type={status.type} message={status.message} />
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label htmlFor="consent" className="flex gap-3 text-sm leading-6 text-muted">
          <input
            id="consent"
            type="checkbox"
            checked={values.consent}
            onChange={(event) => updateField("consent", event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-border text-brand"
          />
          <span>I agree to submit this demo contact form.</span>
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="button-primary w-full px-6 py-3.5 text-base disabled:opacity-70 sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
