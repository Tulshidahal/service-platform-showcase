import { NextResponse } from "next/server";
import { deliverLead } from "@/lib/lead-delivery";
import { contactFormSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please review the form and try again." },
        { status: 400 },
      );
    }

    const { company, ...leadData } = parsed.data;
    void company;

    const entry = {
      id: crypto.randomUUID(),
      submittedAt: new Date().toISOString(),
      kind: "contact",
      ...leadData,
    };

    await deliverLead({
      kind: "contact",
      entry,
    });

    return NextResponse.json({
      message: "Thanks. Your demo message was received successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "We could not send your message. Please try again." },
      { status: 500 },
    );
  }
}
