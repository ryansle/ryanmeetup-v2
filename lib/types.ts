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

type RyanPhoto = {
  fields: {
    file: ContentfulFile;
    title: string;
  };
  metaData: {
    tags: string[];
  };
  sys: {
    createdAt: Date;
    environment: {
      sys: ContentfulSys;
    };
    id: string;
    locale: string;
    revision: number;
    space: {
      sys: ContentfulSys
    };
    type: string;
    updatedAt: Date;
  };
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
  locationType: 'Previous Event' | 'Future Event' | 'Ryan Hub' | 'Community Event';
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

export type {
  RyanEvent,
  TravelingRyan,
  ChampionRyan,
  RepeatRyan,
  FrequentlyAskedQuestion,
  Article,
  MediaEvent,
  RyanPhoto,
  Location,
  MailerParams,
  ContentfulImage,
  Route,
};
