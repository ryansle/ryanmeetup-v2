// Types
import type { ContentfulImage } from '@/lib/types';

const convertDateToDateTimeString = (date: Date) => {
  const dateObject = new Date(date);

  const dateString = dateObject.toDateString();
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();

  return `${dateString.slice(0, 3)}, ${dateString.slice(4, 8)} ${day}, ${year}`;
};

const convertShortDate = (date: Date) => {
  const dateObject = new Date(date);

  const dateString = dateObject.toDateString();
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();

  return `${dateString.slice(4, 8)} ${day + 1}, ${year}`;
};

const convertImageUrl = (file: ContentfulImage) => {
  const route = file.fields?.file?.url;

  if (route) {
    return `https://${route.replace('//', '')}`;
  }
};

export {
  convertDateToDateTimeString,
  convertShortDate,
  convertImageUrl
};