import BlogWrapper from "@/components/Blog/BlogWrapper";
import Hero from "@/components/Hero";
import type { SearchParams } from "@/types/SearchParamsType";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  return (
    <main className="flex flex-col min-h-[80vh]">
      <Hero />
      <BlogWrapper {...params} />
    </main>
  );
}
