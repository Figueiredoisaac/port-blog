import Image from "next/image";
import Link from "next/link";
import type { PostType } from "@/types/PostType";
import cropText from "@/utils/croptext";

function BlogPost({ post }: { post: PostType }) {
  return (
    <Link
      href={`/blog/${post.id}`}
      title={post.title}
      aria-label={`Ler mais sobre ${post.title}`}
    >
      <article className="flex flex-col justify-between min-h-full p-6 border border-secondary rounded-l-sm hover:shadow-[0_4px_44px_0_rgba(28,167,200,0.3)] transition duration-300">
        <div className="space-y-[26px]">
          <div className="relative">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={333}
              height={196}
              className="h-[160px] sm:h-[196px] w-full object-cover bg-center bg-no-repeat"
              loading="lazy"
            />
            <div className="absolute bottom-0 right-0 bg-secondary text-white p-1.5 text-sm min-w-[130px] text-center">
              {post.category.name}
            </div>
          </div>
          <h2 className="text-xl text-primary font-title font-bold">
            {post.title}
          </h2>
          <p className="text-neutral">{cropText(post.content, 120)}</p>
        </div>
        <span className="text-secondary font-bold mt-[26px]">Ler mais</span>
      </article>
    </Link>
  );
}

export default BlogPost;
