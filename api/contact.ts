import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface FormBody {
  name: string;
  email: string;
  message: string;
  token: string;
}

type RecaptchaResponse = {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message, token } = req.body as FormBody;

  const secret = process.env.RECAPTCHA_SECRET;
  if (!secret) {
    return res.status(500).json({ error: "Missing RECAPTCHA_SECRET" });
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret,
          response: token,
        }),
      },
    );

    if (!response.ok) {
      return res.status(502).json({
        success: false,
        message: `reCAPTCHA verify failed: ${response.status}`,
      });
    }

    const recaptchaData = (await response.json()) as RecaptchaResponse;

    if (!recaptchaData.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid reCAPTCHA",
        errors: recaptchaData["error-codes"],
      });
    }
  } catch (err) {
    console.error("reCAPTCHA error", err);
    return res
      .status(502)
      .json({ success: false, message: "Failed to validate reCAPTCHA" });
  }

  const mailfrom = process.env.MAIL_FROM;
  const mailto = process.env.MAIL_TO;
  if (!mailfrom || !mailto) {
    return res.status(500).json({ error: "Missing MAIL_FROM or MAIL_TO" });
  }

  const { data, error } = await resend.emails.send({
    from: mailfrom,
    to: mailto,
    subject: `New Contact message from ${name}`,
    html: `<strong>Name:</strong> ${name}<br>
           <strong>Email:</strong> ${email}<br>
           <strong>Message:</strong> ${message}`,
  });

  if (error) return res.status(400).json(error);
  return res.status(200).json({ success: true, id: data?.id });
}
