import {
  getPosts,
  getPostsByCategory,
  getPostsByTag,
} from "@/services/ApiClient";
import { searchPosts } from "@/services/SearchPosts";
import type { PaginationData } from "@/types/PaginationType";
import type { PostType } from "@/types/PostType";
import type { SearchParams } from "@/types/SearchParamsType";
import BlogHeader from "./BlogHeader";
import BlogList from "./BlogList";
import BlogPagination from "./BlogPagination";

async function BlogWrapper({ page, category, tag, s }: SearchParams) {
  let posts: PostType[];
  let pagination: PaginationData;

  const pageNumber = Number.parseInt(page ?? "1", 10);
  const limit = 6;

  if (s) {
    const result = await searchPosts(s, pageNumber);
    posts = result.posts;
    pagination = result.pagination;
  } else if (category) {
    const result = await getPostsByCategory({
      category,
      page: pageNumber,
      limit,
    });
    posts = result.posts;
    pagination = result.pagination;
  } else if (tag) {
    const result = await getPostsByTag({
      tag,
      page: pageNumber,
      limit,
    });
    posts = result.posts;
    pagination = result.pagination;
  } else {
    // Para busca por texto ou listagem geral
    const result = await getPosts({
      page: pageNumber,
      limit,
      search: s,
    });
    posts = result.posts;
    pagination = result.pagination;
  }

  return (
    <div className="flex flex-col container px-3 mx-auto space-y-8">
      <BlogHeader />
      <BlogList posts={posts} />
      {posts.length > 0 && <BlogPagination pagination={pagination} />}
    </div>
  );
}

export default BlogWrapper;
