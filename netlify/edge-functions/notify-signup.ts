import type { Context } from "@netlify/edge-functions";

const NOTIFY_EMAIL = "ben@millarX.com.au";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

export default async (request: Request, context: Context) => {
  // Only allow POST requests
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { email } = await request.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Send notification email via Resend
    if (RESEND_API_KEY) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Cherry Bay <notifications@cherrybay.com.au>",
          to: [NOTIFY_EMAIL],
          subject: "New Cherry Bay Signup!",
          html: `
            <h2>New Email Signup</h2>
            <p>Someone just signed up for the Cherry Bay launch list!</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" })}</p>
            <hr>
            <p style="color: #666; font-size: 12px;">This notification was sent from your Cherry Bay website.</p>
          `,
        }),
      });

      if (!response.ok) {
        console.error("Failed to send notification email:", await response.text());
      }
    } else {
      console.log("RESEND_API_KEY not configured - skipping email notification");
      console.log("New signup:", email);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in notify-signup:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const config = {
  path: "/api/notify-signup",
};
