import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/schemas";
import { CONTACT } from "@/lib/constants";

// NOTE: To make this work, sign up at https://resend.com, verify a domain or use their test domain,
// generate an API key, and add it to your .env.local file as RESEND_API_KEY.

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body against schema
    const result = contactFormSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data.", details: result.error.errors },
        { status: 400 }
      );
    }
    
    const { name, email, phone, eventType, message } = result.data;
    
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing from environment variables.");
      return NextResponse.json(
        { error: "Server configuration error. Please try WhatsApp instead." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send the email
    const data = await resend.emails.send({
      from: "EvenRise Events <onboarding@resend.dev>", // Replace with your verified domain in production
      to: [CONTACT.email], // Send to the business email
      subject: `New Enquiry from ${name} - ${eventType}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0B1B33;">
          <h2 style="color: #C9A24B;">New Website Enquiry</h2>
          <p>You have received a new enquiry via the EvenRise Events contact form.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <th style="text-align: left; padding: 10px; border-bottom: 1px solid #eee; width: 120px;">Name:</th>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 10px; border-bottom: 1px solid #eee;">Email:</th>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 10px; border-bottom: 1px solid #eee;">Phone:</th>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 10px; border-bottom: 1px solid #eee;">Event Type:</th>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${eventType}</td>
            </tr>
          </table>
          <h3 style="margin-top: 30px; font-size: 16px;">Message:</h3>
          <div style="background-color: #F7F5F0; padding: 15px; border-radius: 8px; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${message}</div>
        </div>
      `,
    });

    if (data.error) {
      console.error("Resend API error:", data.error);
      return NextResponse.json(
        { error: "Failed to send email. Please try WhatsApp instead." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try WhatsApp instead." },
      { status: 500 }
    );
  }
}
