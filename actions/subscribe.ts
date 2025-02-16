import MailerLite from '@mailerlite/mailerlite-nodejs';
import type { MailerParams } from '@/lib/types';

const mailerlite = new MailerLite({
  api_key: process.env.MAILER_API_TOKEN as string
});

export async function subscribeToEmails(email: string) {
  let date = new Date();
  date = new Date(date.getTime() - 3000000);
  // @ts-ignore
  const dateString = date.getFullYear().toString() + '-' + ((date.getMonth() + 1).toString().length == 2 ? (date.getMonth() + 1).toString() : '0' + (date.getMonth() + 1).toString()) + '-' + (date.getDate().toString().length == 2 ? date.getDate().toString() : '0' + date.getDate().toString()) + ' ' + (date.getHours().toString().length == 2 ? date.getHours().toString() : '0' + date.getHours().toString()) + ':' + ((parseInt(date.getMinutes() / 5) * 5).toString().length == 2 ? (parseInt(date.getMinutes() / 5) * 5).toString() : '0' + (parseInt(date.getMinutes() / 5) * 5).toString()) + ':00';

  const params = {
    email,
    groups: [process.env.MAILER_GROUP_ID as string],
    status: 'active',
    subscribed_at: dateString,
  }

  console.log(process.env.MAILER_API_TOKEN);

  mailerlite.subscribers.createOrUpdate(params as MailerParams)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      if (error.response) console.log(error.response.data);
    });
};