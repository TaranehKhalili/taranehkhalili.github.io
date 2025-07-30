import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function GET(
  request: Request,
  { params }: { params: Promise<{ pageId: string }> }
) {
  try {
    const { pageId } = await params;
    
    if (!pageId) {
      return NextResponse.json({ error: 'Page ID is required' }, { status: 400 });
    }

    // Fetch the page content using the official Notion API
    const page = await notion.pages.retrieve({ page_id: pageId });
    const blocks = await notion.blocks.children.list({ block_id: pageId });

    // Format the data for react-notion-x
    const recordMap = {
      block: {
        [pageId]: {
          value: page,
          role: 'reader'
        },
        ...blocks.results.reduce((acc: any, block: any) => {
          acc[block.id] = {
            value: block,
            role: 'reader'
          };
          return acc;
        }, {})
      },
      collection: {},
      collection_view: {},
      collection_query: {},
      notion_user: {},
      signed_urls: {},
      preview_images: {}
    };

    return NextResponse.json({
      page,
      blocks: blocks.results,
      recordMap
    });
  } catch (error) {
    console.error('Error fetching Notion page:', error);
    return NextResponse.json({ error: 'Failed to fetch page content' }, { status: 500 });
  }
} 