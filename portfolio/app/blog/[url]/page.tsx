import Link from "next/link";

export async function generateStaticParams() {
  // Return a static parameter for the sample post
  return [
    { url: 'sample-post' }
  ];
}

export default async function BlogPost({ params }: { params: Promise<{ url: string }> }) {
  const { url } = await params;
  
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Blog Post: {url}
      </h1>
      <div className="prose max-w-none">
        <p>This blog post will be available when deployed with the proper Notion API key.</p>
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}