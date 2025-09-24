import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog",
};

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-[80vh]">
      <h1>Blog</h1>
    </main>
  );
}
