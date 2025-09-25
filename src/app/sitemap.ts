import type { MetadataRoute } from "next";
import { getAllPosts } from "@/services/SearchPosts";

async function getPosts() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${post.id}`,
    lastModified: post.createdAt,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      lastModified: new Date(),
    },
    ...(await getPosts()),
  ];
}
