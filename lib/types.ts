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
  coverImage: ContentfulImage | string;
  description: string;
  href: string;
  title: string;
  date: Date | string;
  dateTime: string;
  city: string;
  location: string;
  venue: string;
  isPartnerEvent: boolean;
  chapter: string[];
};

type FrequentlyAskedQuestion = {
  question: string;
  answer: string;
  type: string;
  loadOrder?: number;
};

type Article = {
  title: string;
  author: string;
  outlet: string;
  href: string;
  publishDate: Date;
  publishedOn: string;
  thumbnail: ContentfulImage;
  new: boolean;
};

type MediaEvent = {
  title: string;
  date: Date;
  eventDate: string;
  bgImage: ContentfulImage;
  photoUrl: string;
  credits?: string[];
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
  locationType: 'Event Location' | 'Ryan Hub' | 'Ryan-Named Business' | 'Ryan-Owned Business' | 'Chapter';
};

type TravelingRyan = {
  fullName: string;
  headshot: ContentfulImage;
  traveledTo: string;
  traveledFrom: string;
  milesTraveled: number;
  event: string;
  date: Date;
  eventDate: string;
  instagram?: string;
};

type ChampionRyan = {
  fullName: string;
  fullName2?: string;
  headshot: ContentfulImage;
  event: string;
  date: Date;
  eventDate: string;
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

type RyanChapter = {
  city: string;
  slug: string;
  state: string;
  leaders: string[];
  whatsAppLink: string;
  coverImage: ContentfulImage;
  instagram: string;
};

type ChapterLead = {
  name: string;
  contact: string;
  headshot?: ContentfulImage;
};

type Sponsor = {
  name: string;
  href: string;
  eventsSponsored: number;
  darkModeImage: ContentfulImage;
  lightModeImage: ContentfulImage;
};

type Outlet = {
  title: string;
  href: string;
  darkModeImage: ContentfulImage;
  lightModeImage: ContentfulImage;
};

type Testimonial = {
  lastName: string;
  headshot: ContentfulImage;
  quote: string;
  location: string;
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
  ContentfulImage,
  Route,
  Flyer,
  ContactFormFields,
  RyanInNeed,
  RyanChapter,
  ChapterLead,
  Sponsor,
  Outlet,
  Testimonial
};
