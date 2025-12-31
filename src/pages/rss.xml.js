import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context: { site: any; }) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My reading blog',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}