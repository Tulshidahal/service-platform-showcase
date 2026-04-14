import { z } from "zod";
import { requestTypeOptions } from "@/lib/site";

const requiredString = (label: string) =>
  z.string().trim().min(1, `${label} is required.`);

function isTodayOrLater(input: string) {
  if (!input) {
    return true;
  }

  const parsed = new Date(`${input}T00:00:00`);

  if (Number.isNaN(parsed.getTime())) {
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return parsed >= today;
}

export const requestFormSchema = z.object({
  fullName: requiredString("Full name").max(80, "Full name is too long."),
  email: requiredString("Email").email("Enter a valid email address."),
  phoneNumber: requiredString("Phone number").refine(
    (value) => /^[0-9()+\-\s.]{10,}$/.test(value),
    "Enter a valid phone number.",
  ),
  companyName: z.string().trim().max(120, "Keep this field short."),
  requestType: z.enum(requestTypeOptions, {
    error: "Select a request type.",
  }),
  targetDate: z
    .string()
    .trim()
    .refine(isTodayOrLater, "Choose a date that is today or later."),
  message: z
    .string()
    .trim()
    .min(10, "Please add a few project details.")
    .max(1500, "Please keep your message under 1500 characters."),
  consent: z.boolean().refine((value) => value, "You must agree before submitting."),
  company: z.string().trim().max(0, "Spam protection triggered. Please try again."),
});

export const contactFormSchema = z.object({
  fullName: requiredString("Full name").max(80, "Full name is too long."),
  email: requiredString("Email").email("Enter a valid email address."),
  phoneNumber: requiredString("Phone number").refine(
    (value) => /^[0-9()+\-\s.]{10,}$/.test(value),
    "Enter a valid phone number.",
  ),
  topic: z.string().trim().max(120, "Keep this field short."),
  message: z
    .string()
    .trim()
    .min(10, "Please add a short message.")
    .max(1500, "Please keep your message under 1500 characters."),
  consent: z.boolean().refine((value) => value, "You must agree before submitting."),
  company: z.string().trim().max(0, "Spam protection triggered. Please try again."),
});

export type RequestFormValues = z.infer<typeof requestFormSchema>;
export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function getFieldErrors(error: z.ZodError) {
  const fieldErrors: Record<string, string> = {};

  for (const issue of error.issues) {
    const field = issue.path[0];

    if (typeof field === "string" && !fieldErrors[field]) {
      fieldErrors[field] = issue.message;
    }
  }

  return fieldErrors;
}
