// import type { VercelRequest, VercelResponse } from "@vercel/node";
// import { Resend } from "resend";
// import { z } from "zod";
//
// const resend = new Resend(process.env.RESEND_API_KEY);
//
// const contactSchema = z.object({
//   name: z
//     .string()
//     .min(2, { message: "Please enter your full name" })
//     .max(100, { message: "Name is too long" }),
//   email: z
//     .string()
//     .email({ message: "Please enter a valid email" })
//     .max(200, { message: "Email is too long" }),
//   message: z
//     .string()
//     .min(10, { message: "Please enter at least 10 characters" })
//     .max(5000, { message: "Message is too long" }),
//   recaptchaToken: z.string().min(1, { message: "reCAPTCHA is required" }),
// });
//
// async function verifyRecaptcha(token: string) {
// 		const secret = process.env.RECAPTHA_SECRET;
// 		if (!secret) { throw new Error("Missing RECAPTCHA secret key");}
//
// 		const params = new URLSearchParams();
// 		params.append("secret", secret);
// 		params.append("token", token);
// }
//
// export default async function handler(
//   req: VercelRequest,
//   res: VercelResponse,
// ) {}
