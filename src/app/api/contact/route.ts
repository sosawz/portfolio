import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_MAP = new Map<string, number>();
const RATE_LIMIT_MS = 60_000;

function sanitize(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildHtml(name: string, email: string, message: string) {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; border-radius: 12px; overflow: hidden;">
      <div style="background: linear-gradient(135deg, #a3e635 0%, #84cc16 100%); padding: 32px; text-align: center;">
        <h1 style="margin: 0; color: #000; font-size: 20px; font-weight: 700;">New Contact Message</h1>
        <p style="margin: 8px 0 0; color: #1a1a1a; font-size: 14px;">via sosawz.dev</p>
      </div>
      <div style="padding: 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #737373; font-size: 13px; width: 80px; vertical-align: top;">From</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #fafafa; font-size: 14px; font-weight: 500;">${sanitize(name)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f; color: #737373; font-size: 13px; vertical-align: top;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #1f1f1f;">
              <a href="mailto:${sanitize(email)}" style="color: #a3e635; font-size: 14px; text-decoration: none;">${sanitize(email)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #737373; font-size: 13px; vertical-align: top;">Message</td>
            <td style="padding: 12px 0; color: #d4d4d4; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${sanitize(message)}</td>
          </tr>
        </table>
        <div style="margin-top: 32px; text-align: center;">
          <a href="mailto:${sanitize(email)}" style="display: inline-block; background: #a3e635; color: #000; padding: 10px 24px; border-radius: 999px; font-size: 13px; font-weight: 600; text-decoration: none;">Reply to ${sanitize(name)}</a>
        </div>
      </div>
      <div style="padding: 16px 32px; border-top: 1px solid #1f1f1f; text-align: center;">
        <p style="margin: 0; color: #525252; font-size: 12px;">Sent from portfolio contact form</p>
      </div>
    </div>`;
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    if (name.length > 100 || email.length > 320 || message.length > 5000) {
      return NextResponse.json(
        { error: "Input too long" },
        { status: 400 },
      );
    }

    const now = Date.now();
    const lastSent = RATE_LIMIT_MAP.get(email);
    if (lastSent && now - lastSent < RATE_LIMIT_MS) {
      return NextResponse.json(
        { error: "Please wait before sending another message" },
        { status: 429 },
      );
    }
    RATE_LIMIT_MAP.set(email, now);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "sosawz.sng@gmail.com",
      replyTo: email,
      subject: `[sosawz.dev] ${name} — New message`,
      html: buildHtml(name, email, message),
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
