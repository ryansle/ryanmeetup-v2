'use server';

import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

const fetchEvents = async () => {
  // @ts-ignore
  const data = await client.getEntries(({ content_type: 'event', order: '-fields.date' }));

  return data.items.map((entry) => entry.fields);
};

const fetchFAQs = async () => {
  const data = await client.getEntries(({ content_type: 'faq' }));

  return data.items.map((entry) => entry.fields).reverse();
};

const fetchArticles = async () => {
  // @ts-ignore
  const data = await client.getEntries(({ content_type: 'article', order: '-fields.publishDate' }));

  return data.items.map((entry) => entry.fields);
};

const fetchMedia = async () => {
  // @ts-ignore
  const data = await client.getEntries(({ content_type: 'gallery', order: '-fields.date' }));

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
  const data = await client.getEntries(({ content_type: 'farthest', order: '-fields.date' }));

  return data.items.map((entry) => entry.fields);
};

const fetchChampionRyans = async () => {
  // @ts-ignore
  const data = await client.getEntries(({ content_type: 'champion', order: '-fields.date' }));

  return data.items.map((entry) => entry.fields);
};

const fetchRepeatRyans = async () => {
  const data = await client.getEntries(({ content_type: 'leaderboard' }));

  return data.items.map((entry) => entry.fields);
};

const fetchChapters = async () => {
  const data = await client.getEntries(({ content_type: 'chapter' }));

  return data.items.map((entry) => entry.fields);
};

const fetchSingleChapter = async (slug: string) => {
  const entries = await client.getEntries({
    content_type: 'chapter',
    'fields.slug': slug,
    limit: 1,
  });

  if (!entries.items.length) {
    throw new Error(`No chapter found for slug: ${slug}`);
  }

  return entries.items[0].fields;
};

const fetchSponsors = async () => {
  const data = await client.getEntries(({ content_type: 'sponsor' }));

  return data.items.map((entry) => entry.fields);
};

const fetchOutlets = async () => {
  // @ts-ignore
  const data = await client.getEntries(({ content_type: 'outlets', order: 'sys.updatedAt' }));

  console.log(data.items)

  return data.items.map((entry) => entry.fields);
}

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
};