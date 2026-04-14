import "server-only";

import { appendToStorage } from "@/lib/storage";

type LeadKind = "request" | "contact";

type LeadDeliveryInput = {
  kind: LeadKind;
  entry: Record<string, unknown>;
};

export async function deliverLead({ kind, entry }: LeadDeliveryInput) {
  const outcomes: string[] = [];
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.LEAD_WEBHOOK_SECRET
          ? { Authorization: `Bearer ${process.env.LEAD_WEBHOOK_SECRET}` }
          : {}),
      },
      body: JSON.stringify({
        kind,
        entry,
        source: "service-platform-showcase",
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Lead webhook failed with status ${response.status}.`);
    }

    outcomes.push("webhook");
  }

  try {
    const filename =
      kind === "request" ? "request-submissions.json" : "contact-messages.json";

    await appendToStorage(filename, entry);
    outcomes.push("local-storage");
  } catch (error) {
    if (!webhookUrl) {
      throw error;
    }
  }

  if (outcomes.length === 0) {
    throw new Error("No lead delivery method is available.");
  }

  return outcomes;
}
