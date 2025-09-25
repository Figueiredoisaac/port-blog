import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import type { CategoryType } from "@/types/PostType";

type PropsCategory = {
  cat: CategoryType;
  setSearchTerm: (term: string) => void;
  className?: string;
};

function BlogCategoryBtn({ cat, setSearchTerm, className }: PropsCategory) {
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <Link
      href={`/?category=${cat.slug}#blog`}
      title={cat.name}
      key={cat.slug}
      className={className}
      onClick={(e) => {
        setSearchTerm("");
        if (searchParams.get("category") === cat.slug) {
          e.preventDefault();
          router.push(`/#blog`);
        }
      }}
    >
      {cat.name}
    </Link>
  );
}

export default BlogCategoryBtn;
