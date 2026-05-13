import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL = "https://lidup.co.il/api/functions/receiveWebsiteLead";
const FORM_ID = "form_fmlsvjb4r_mp465bqj";

export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string; phone?: string; message?: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const { name, email, phone, message } = body;

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  const secretKey = process.env.LIDUP_SECRET_KEY;
  if (!secretKey) {
    console.error("LIDUP_SECRET_KEY is not set");
    return NextResponse.json({ error: "server_misconfigured" }, { status: 500 });
  }

  const payload: Record<string, string> = {
    form_id: FORM_ID,
    secret_key: secretKey,
    name,
    email,
    phone,
    source: "website",
    page_url: "https://noamgamliel.com",
    submission_date: new Date().toISOString(),
  };
  if (message?.trim()) payload.notes = message.trim();

  const upstream = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!upstream.ok) {
    const text = await upstream.text().catch(() => "");
    console.error(`Lidup webhook error ${upstream.status}:`, text);
    return NextResponse.json({ error: "upstream_error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
