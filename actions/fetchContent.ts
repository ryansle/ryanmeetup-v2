'use server';

import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

const fetchEvents = async () => {
  // @ts-ignore
  const data = await client.getEntries(({ content_type: 'event', order: 'sys.createdAt' }));

  return data.items.map((entry) => entry.fields);
};

const fetchFAQs = async () => {
  const data = await client.getEntries(({ content_type: 'faq' }));

  return data.items.map((entry) => entry.fields).reverse();
};

const fetchArticles = async () => {
  // @ts-ignore
  const data = await client.getEntries(({ content_type: 'article', order: '-sys.createdAt' }));

  return data.items.map((entry) => entry.fields);
};

const fetchMedia = async () => {
  const data = await client.getEntries(({ content_type: 'gallery' }));

  return data.items;
};

const fetchSingleMediaEvent = async (id: string) => {
  const data = await client.getEntry(id);

  return data.fields;
};

const fetchLocations = async () => {
  const data = await client.getEntries(({ content_type: 'locations', limit: 1000 }));

  return data.items.map((entry) => entry.fields);
};

const fetchFarthestRyans = async () => {
  // @ts-ignore
  const data = await client.getEntries(({ content_type: 'farthest', order: '-sys.createdAt' }));

  return data.items.map((entry) => entry.fields);
};

const fetchChampionRyans = async () => {
  // @ts-ignore
  const data = await client.getEntries(({ content_type: 'champion', order: '-sys.createdAt' }));

  return data.items.map((entry) => entry.fields);
};

const fetchRepeatRyans = async () => {
  // @ts-ignore
  const data = await client.getEntries(({ content_type: 'leaderboard' }));

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
};