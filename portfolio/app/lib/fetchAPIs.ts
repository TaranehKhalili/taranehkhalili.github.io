import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const databaseId = "21f528c3eaf4807cb36de05aaaf592a3";

function extractPageId(url: string): string | null {
  const match = url.match(/([a-f0-9]{32})/);
  return match ? match[1] : null;
}

export const getBlogPosts = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results
    .filter((page): page is any => 'properties' in page)
    .map((page) => {
      console.log(page);
      const props = page.properties;
      const title = props.Title?.title?.[0]?.plain_text || "Untitled";
      const url =page.url || "";
      const pageId = extractPageId(url);
      const slug = title.toLowerCase().replace(/\s+/g, "-");

      return {
        title,
        slug,
        pageId,
        url
      };
    });
}; 