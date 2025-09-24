import { getPosts } from "@/services/ApiClient";
import type { PostType } from "@/types/PostType";
import BlogPost from "./BlogPost";

async function BlogList() {
  const { posts } = await getPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post: PostType) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default BlogList;
