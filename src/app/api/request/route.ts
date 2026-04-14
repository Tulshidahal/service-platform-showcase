import { NextResponse } from "next/server";
import { deliverLead } from "@/lib/lead-delivery";
import { requestFormSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = requestFormSchema.safeParse(body);

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
      kind: "request",
      ...leadData,
    };

    await deliverLead({
      kind: "request",
      entry,
    });

    return NextResponse.json({
      message: "Thanks. Your demo request was received successfully.",
    });
  } catch (error) {
    console.error("Request form error:", error);

    return NextResponse.json(
      { error: "We could not save your request. Please try again." },
      { status: 500 },
    );
  }
}
