import type { PostType } from "@/types/PostType";
import BlogPost from "./BlogPost";

function BlogList({ posts }: { posts: PostType[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post: PostType) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default BlogList;
