import { NextResponse } from 'next/server';
import { getBlogPosts } from '../../fetchAPIs';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const posts = await getBlogPosts();
    console.log(posts);
    const post = posts.find((post) => post.slug === slug);
    
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
} 