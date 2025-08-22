'use server';

import { Resend } from 'resend';

import { env } from '@/env.mjs';
import { TFormSchema } from '@/lib/form-schema';

const resend = new Resend(env.RESEND_API_KEY);

export const sendEmailAction = async ({ email, message }: TFormSchema) => {
  try {
    await resend.emails.send({
      from: 'Portfolio Website <onboarding@resend.dev>',
      to: 'm.fareed.1411@gmail.com',
      subject: 'Someone contacted you from your portfolio',
      replyTo: email,
      text: `email: ${email} \nmessage: ${message}`,
    });

    return {
      data: 'Email sent successfully!',
    };
  } catch {
    return {
      error: `Something went wrong!`,
    };
  }
};
