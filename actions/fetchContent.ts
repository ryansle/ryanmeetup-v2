"use server";

import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

const fetchEvents = async () => {
  const data = await client.getEntries({
    content_type: "event",
    // @ts-ignore
    order: "-fields.date",
  });

  return data.items.map((entry) => entry.fields);
};

const fetchFAQs = async () => {
  const data = await client.getEntries({ content_type: "faq" });

  return data.items.map((entry) => entry.fields).reverse();
};

const fetchArticles = async () => {
  const data = await client.getEntries({
    content_type: "article",
    // @ts-ignore
    order: "-fields.publishDate",
  });

  return data.items.map((entry) => entry.fields);
};

const fetchMedia = async () => {
  const data = await client.getEntries({
    content_type: "gallery",
    // @ts-ignore
    order: "-fields.date",
  });

  return data.items;
};

const fetchSingleMediaEvent = async (id: string) => {
  const data = await client.getEntry(id);

  return data.fields;
};

const fetchLocations = async () => {
  const data = await client.getEntries({
    content_type: "locations",
    limit: 1000,
  });

  return data.items.map((entry) => entry.fields);
};

const fetchFarthestRyans = async () => {
  const data = await client.getEntries({
    content_type: "farthest",
    // @ts-ignore
    order: "-fields.date",
  });

  return data.items.map((entry) => entry.fields);
};

const fetchChampionRyans = async () => {
  const data = await client.getEntries({
    content_type: "champion",
    // @ts-ignore
    order: "-fields.date",
  });

  return data.items.map((entry) => entry.fields);
};

const fetchRepeatRyans = async () => {
  const data = await client.getEntries({ content_type: "leaderboard" });

  return data.items.map((entry) => entry.fields);
};

const fetchChapters = async () => {
  const data = await client.getEntries({ content_type: "chapter" });

  return data.items.map((entry) => entry.fields);
};

const fetchSingleChapter = async (slug: string) => {
  const entries = await client.getEntries({
    content_type: "chapter",
    "fields.slug": slug,
    limit: 1,
  });

  if (entries.items[0]) {
    return entries.items[0].fields;
  }

  return null;
};

const fetchSponsors = async () => {
  const data = await client.getEntries({ content_type: "sponsor" });

  return data.items.map((entry) => entry.fields);
};

const fetchOutlets = async () => {
  const data = await client.getEntries({
    content_type: "outlets",
    // @ts-ignore
    order: "sys.updatedAt",
  });

  return data.items.map((entry) => entry.fields);
};

const fetchTestimonies = async () => {
  const data = await client.getEntries({ content_type: "testimony" });

  return data.items.map((entry) => entry.fields);
};

const fetchDonations = async () => {
  const data = await client.getEntries({ content_type: "charitableEfforts" });

  return data.items.map((entry) => entry.fields);
};

export {
  fetchEvents,
  fetchFAQs,
  fetchArticles,
  fetchMedia,
  fetchSingleMediaEvent,
  fetchLocations,
  fetchFarthestRyans,
  fetchChampionRyans,
  fetchRepeatRyans,
  fetchChapters,
  fetchSingleChapter,
  fetchSponsors,
  fetchOutlets,
  fetchTestimonies,
  fetchDonations,
};
