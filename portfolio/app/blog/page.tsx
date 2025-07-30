// app/blog/page.tsx
import { getBlogPosts } from "../api/fetchAPIs";
import Link from "next/link";

export default async function Blog() {
  const posts = await getBlogPosts();
console.log(posts);

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-4xl mx-auto">
      {posts.map((post) => (
        <Link
          href={`/blog/${post.slug}`}
          key={post.slug}
          className="border p-4 rounded-2xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">{post.title}</h2>
        </Link>
      ))}
    </main>
  );
}