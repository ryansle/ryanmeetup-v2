import MailerLite from '@mailerlite/mailerlite-nodejs';

const mailerlite = new MailerLite({
  api_key: process.env.NEXT_PUBLIC_MAILER_API_TOKEN as string
});

export default mailerlite;