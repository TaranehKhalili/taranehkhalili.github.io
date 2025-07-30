// app/blog/[url]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { use } from 'react';
import { NotionRenderer } from 'react-notion-x';
import { Code } from 'react-notion-x/build/third-party/code';
import { Collection } from 'react-notion-x/build/third-party/collection';
import { Equation } from 'react-notion-x/build/third-party/equation';
import { Modal } from 'react-notion-x/build/third-party/modal';
import { Pdf } from 'react-notion-x/build/third-party/pdf';

export default function BlogPost({ params }: { params: Promise<{ url: string }> }) {
  const { url } = use(params);
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNotionPage() {
      try {
        // First, get the post data to find the pageId
        const response = await fetch(`/api/blog/${url}`);
        const post = await response.json();

        if (post.pageId) {
          // Then fetch the Notion page content
          const notionResponse = await fetch(`/api/notion/${post.pageId}`);
          const notionData = await notionResponse.json();
          setPageData(notionData);
        }
      } catch (error) {
        console.error('Error loading post:', error);
      }

      setLoading(false);
    }

    loadNotionPage();
  }, [url]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!pageData) return <p className="p-6">Post not found.</p>;

  console.log(pageData);
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        {pageData.page?.properties?.Title?.title?.[0]?.plain_text || 'Untitled'}
      </h1>
      <div className="prose max-w-none">
        {pageData.recordMap && (
          <NotionRenderer
            recordMap={pageData.recordMap}
            components={{
              Code,
              Collection,
              Equation,
              Modal,
              Pdf
            }}
            fullPage={false}
            darkMode={false}
          />
        )}
      </div>
    </div>
  );
}