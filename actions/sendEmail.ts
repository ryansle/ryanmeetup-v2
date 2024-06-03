'use server';

import { ContactFormFields } from '@/lib/types';
import emailjs from '@emailjs/browser';

export async function sendEmail(form: ContactFormFields) {
  const templateId = process.env.EMAIL_TEMPLATE_ID;
  const userId = process.env.EMAIL_USER_ID;
  const serviceId = process.env.EMAIL_SERVICE_ID;

  emailjs.send(serviceId as string, templateId as string, form, userId);
};