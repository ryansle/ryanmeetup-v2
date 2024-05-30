import mailerlite from '@/data/mailerlite';
import type { MailerParams } from '@/lib/types';

const postEmail = async (params: MailerParams) => {
  mailerlite.subscribers.createOrUpdate(params)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      if (error.response) console.log(error.response.data);
    });
};

export { postEmail };