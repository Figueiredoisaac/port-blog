import type { PostType } from "@/types/PostType";
import BlogPost from "./BlogPost";

function BlogList({ posts }: { posts: PostType[] }) {
  if (posts.length === 0)
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <h2 className="text-center text-2xl font-bold text-primary font-title">
          OPS...
        </h2>
        <p className="text-center text-neutral dark:text-neutral-400">
          Nenhum post encontrado.
        </p>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post: PostType) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default BlogList;
