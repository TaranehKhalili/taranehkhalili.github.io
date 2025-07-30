// app/blog/page.tsx
import Link from "next/link";

export default async function BlogPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid gap-4">
        <article className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">
            <Link href="/blog/sample-post" className="hover:text-blue-600">
              Sample Blog Post
            </Link>
          </h2>
          <p className="text-gray-600 mb-2">This is a sample blog post that will be populated with real content when deployed.</p>
        </article>
      </div>
    </div>
  );
}