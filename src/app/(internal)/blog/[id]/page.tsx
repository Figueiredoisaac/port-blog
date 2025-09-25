import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogList from "@/components/Blog/BlogList";
import BgGradient from "@/components/Common/BgGradient";
import { getPostById, getPostsByTag } from "@/services/ApiClient";
import type { TagType } from "@/types/PostType";
import cropText from "@/utils/croptext";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const { post } = await getPostById(id);

  return {
    title: post.title,
    description: cropText(post.content, 150),
    keywords: post.tags.map((tag: TagType) => tag.name),
    authors: [{ name: post.author }],
    category: post.category.name,
    openGraph: {
      images: [post.imageUrl],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { post } = await getPostById(id);
  const { posts: postsRelated } = await getPostsByTag({
    tag: post.tags[0].slug,
    page: 1,
    limit: 3,
  });

  return (
    <main className="flex flex-col relative min-h-[80vh] py-20 gap-16">
      <BgGradient className="absolute z-[-1] object-contain inset-0 w-full h-full" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 xl:px-0">
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl md:text-5xl text-primary font-title font-bold">
            {post.title}
          </h1>
          <div className="flex flex-col items-start gap-5">
            <p className="text-neutral font-bold">Categoria:</p>
            <Link
              href={`/?category=${post.category.slug}#blog`}
              className="text-sm md:text-base inline-block bg-cyan-500 hover:bg-cyan-600 font-bold text-white px-3 py-2 rounded transition-colors text-nowrap"
            >
              {post.category.name}
            </Link>
          </div>
          <div className="flex flex-col items-start gap-5">
            <p className="text-neutral font-bold">Tags:</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: TagType) => (
                <Link
                  key={tag.slug}
                  href={`/?tag=${tag.slug}#blog`}
                  className="text-sm md:text-base inline-block border border-secondary hover:border-cyan-600 font-bold text-secondary px-3 py-2 rounded transition-colors text-nowrap"
                >
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center gap-4">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={608}
            height={358}
            className="w-full h-[358px] object-cover max-w-full max-h-full"
            priority
          />
        </div>
      </div>
      <div className="container mx-auto px-4 xl:px-0">
        <p className="text-neutral">{post.content}</p>
      </div>
      <div className="container mx-auto px-4 xl:px-0">
        <h2 className="text-2xl font-bold font-title text-primary">
          Postagens relacionadas
        </h2>
        <div className="mt-10">
          <BlogList posts={postsRelated} />
        </div>
      </div>
    </main>
  );
}
