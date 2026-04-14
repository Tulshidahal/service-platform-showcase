"use client";

import { useMemo, useState } from "react";
import { Field, inputClassName, StatusMessage } from "@/components/forms/field";
import { requestTypeOptions } from "@/lib/site";
import {
  getFieldErrors,
  requestFormSchema,
  type RequestFormValues,
} from "@/lib/validation";

const initialValues: RequestFormValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  companyName: "",
  requestType: "Frontend Work",
  targetDate: "",
  message: "",
  consent: true,
  company: "",
};

export function RequestForm() {
  const [values, setValues] = useState<RequestFormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const minDate = useMemo(() => {
    const today = new Date();
    const offset = today.getTimezoneOffset() * 60000;
    return new Date(today.getTime() - offset).toISOString().split("T")[0];
  }, []);

  const updateField = <K extends keyof RequestFormValues>(
    field: K,
    value: RequestFormValues[K],
  ) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    const parsedValues = requestFormSchema.safeParse(values);

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
      const response = await fetch("/api/request", {
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
        message: payload.message ?? "Request received successfully.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not send your request.",
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
          Request Intake Demo
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
          Shared validation and API submission
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          This form is intentionally simple. It demonstrates typed inputs,
          validation, server submission, and success or error feedback.
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
          label="Company Name"
          name="companyName"
          error={errors.companyName}
          hint="Optional"
          input={
            <input
              id="companyName"
              value={values.companyName}
              onChange={(event) => updateField("companyName", event.target.value)}
              className={`${inputClassName} ${errors.companyName ? "input-error" : ""}`}
              placeholder="Example Studio"
            />
          }
        />
        <Field
          label="Request Type"
          name="requestType"
          error={errors.requestType}
          required
          input={
            <select
              id="requestType"
              value={values.requestType}
              onChange={(event) =>
                updateField(
                  "requestType",
                  event.target.value as RequestFormValues["requestType"],
                )
              }
              className={`${inputClassName} ${errors.requestType ? "input-error" : ""}`}
            >
              {requestTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          }
        />
        <Field
          label="Target Date"
          name="targetDate"
          error={errors.targetDate}
          hint="Optional"
          input={
            <input
              id="targetDate"
              type="date"
              min={minDate}
              value={values.targetDate}
              onChange={(event) => updateField("targetDate", event.target.value)}
              className={`${inputClassName} ${errors.targetDate ? "input-error" : ""}`}
            />
          }
        />
      </div>

      <div className="mt-5">
        <Field
          label="Project Details"
          name="message"
          error={errors.message}
          required
          input={
            <textarea
              id="message"
              value={values.message}
              onChange={(event) => updateField("message", event.target.value)}
              className={`${inputClassName} min-h-40 resize-y ${errors.message ? "input-error" : ""}`}
              placeholder="Describe the work, the stack, and the type of help needed."
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
          <span>I agree to submit this demo request form.</span>
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="button-primary w-full px-6 py-3.5 text-base disabled:opacity-70 sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Submit Request"}
        </button>
      </div>
    </form>
  );
}
