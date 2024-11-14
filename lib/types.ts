// Types
import type { ReactNode } from 'react';

// #region Contentful Types
type ContentfulSys = {
  id: string;
  type: string;
  linkType: string;
};

type ContentfulFile = {
  contentType: string;
  details: {
    image: {
      height: number;
      width: number;
    };
    size: number;
  };
  fileName: string;
  url: string;
}

type ContentfulImage = {
  fields: {
    title: string;
    description: string;
    file: ContentfulFile;
  };
  metaData: {
    tags: string[];
  };
  sys: {
    createdAt: string;
    environment: {
      sys: ContentfulSys;
    };
  };
  id: string;
  locale: string;
  revision: number;
  space: {
    sys: ContentfulSys;
    type: string;
    updatedAt: string;
  };
};
// #endregion

// #region Ryan Meetup Types
type RyanEvent = {
  active: boolean;
  coverImage: ContentfulImage;
  description: string;
  href: string;
  title: string;
  date: Date;
  time: string;
  city: string;
  location: string;
  venue: string;
  isPartnerEvent: boolean;
};

type FrequentlyAskedQuestion = {
  question: string;
  answer: string;
};

type Article = {
  title: string;
  author: string;
  outlet: string;
  href: string;
  publishDate: Date;
  thumbnail: ContentfulImage;
  new: boolean;
};

type MediaEvent = {
  title: string;
  description: string;
  date: Date;
  bgImage: ContentfulImage;
  photos: ContentfulImage[];
  googleDriveLink: string;
};

type Location = {
  locationName: string;
  coordinates: {
    lat: number;
    lon: number;
  };
  eventName: string;
  eventDate: Date;
  image: ContentfulImage;
  city: string;
  locationType: 'Event Location' | 'Ryan Hub' | 'Community Event' | 'Ryan-Named Business' | 'Ryan-Owned Business';
};

type TravelingRyan = {
  fullName: string;
  headshot: ContentfulImage;
  traveledTo: string;
  traveledFrom: string;
  milesTraveled: number;
  event: string;
  date: Date;
  instagram?: string;
};

type ChampionRyan = {
  fullName: string;
  fullName2?: string;
  headshot: ContentfulImage;
  event: string;
  date: Date;
  instagram?: string;
  instagram2?: string;
  title: string;
  location: string;
  location2?: string;
};

type RepeatRyan = {
  fullName: string;
  headshot: ContentfulImage;
  basedIn: string;
  eventsAttended: string[];
};

type Flyer = {
  title: string;
  src: string;
};

type RyanInNeed = {
  title: string;
  coverImage: ContentfulImage;
  goal: string;
  platform: string;
  href: string;
  completed: boolean;
};
// #endregion

// #region Mailerlite Types
type MailerParams = {
  email: string;
  groups: string[];
  status: 'active' | 'unsubscribed' | 'unconfirmed' | 'bounced' | 'junk';
  subscribed_at: string;
};
// #endregion

type Route = {
  icon: ReactNode;
  text: string;
  href: string;
};

type ContactFormFields = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export type {
  RyanEvent,
  TravelingRyan,
  ChampionRyan,
  RepeatRyan,
  FrequentlyAskedQuestion,
  Article,
  MediaEvent,
  Location,
  MailerParams,
  ContentfulImage,
  Route,
  Flyer,
  ContactFormFields,
  RyanInNeed,
};
