import BlogWrapper from "@/components/Blog/BlogWrapper";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[80vh]">
      <Hero />
      <BlogWrapper />
    </main>
  );
}
