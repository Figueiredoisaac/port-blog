"use server";

import type { PostType } from "@/types/PostType";
import { getPosts } from "./ApiClient";

export async function getAllPosts(): Promise<PostType[]> {
  let allPosts: PostType[] = [];
  let currentPage = 1;
  let hasNextPage = true;
  const perPage = 9;

  while (hasNextPage) {
    const data = await getPosts({
      page: currentPage,
      limit: perPage,
    }, {
      cache: "force-cache",
      revalidate: 60 * 60 * 24,
    });

    allPosts = [...allPosts, ...data.posts];
    hasNextPage = data.pagination.hasNextPage;
    currentPage++;
  }

  return allPosts;
}

export async function searchPosts(searchTerm: string, page = 1) {
  const data = await getAllPosts();

  const filteredPosts = data.filter((post) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(lowerSearchTerm) ||
      post.content.toLowerCase().includes(lowerSearchTerm)
    );
  });
  const postsPerPage = 6;
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const pagination = {
    currentPage: page,
    totalPages,
    totalPosts: filteredPosts.length,
    postsPerPage: 6,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  };

  return {
    posts: paginatedPosts,
    pagination,
  };
}
