import { EmailTemplate } from '@/components/EmailTemplate';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const { email, subject, message } = await req.json();

    try {
        const { error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [process.env.TO_EMAIL!],
            subject: `New Contact form submission: ${subject}`,
            react: EmailTemplate({ email, subject, message }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ mesg: "success" }, { status: 200 });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
