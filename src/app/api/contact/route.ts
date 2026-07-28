import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, bike, message } = body;

    await resend.emails.send({
      from: "DN Moto <onboarding@resend.dev>",
      to: "contact.dnmotorsports@gmail.com",
      subject: `New Service Request from ${name}`,
      replyTo: email,

      html: `
        <h2>New Service Request</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Bike:</strong> ${bike}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}