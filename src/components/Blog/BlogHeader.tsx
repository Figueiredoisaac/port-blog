"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/utils/cn";

const CATEGORIES = [
  { slug: "mobile", label: "Mobile" },
  { slug: "programacao", label: "Programação" },
  { slug: "frontend", label: "Frontend" },
  { slug: "devops", label: "DevOps" },
  { slug: "ux-design", label: "UX & Design" },
  { slug: "data-science", label: "Data Science" },
  { slug: "inovacao-gestao", label: "Inovação & Gestão" },
];

function BlogHeader() {
  const [expandCategories, setExpandCategories] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const visibleCategories = expandCategories
    ? CATEGORIES
    : CATEGORIES.slice(0, 3);

  return (
    <header className="w-full flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center lg:justify-between py-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 w-full min-h-10">
        <span className="font-bold font-title text-base xl:text-2xl text-primary dark:text-white mb-2 lg:mb-0">
          Minhas postagens
        </span>
        <form
          className={cn(
            "relative w-full lg:w-64 transition-all duration-200",
            expandCategories && "lg:w-0 overflow-hidden",
          )}
          onSubmit={(e) => {
            e.preventDefault();
            const query = searchTerm.trim();
            if (!query) return;
            router.push(`/blog?s=${encodeURIComponent(query)}`);
          }}
        >
          <input
            type="text"
            name="search"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-10 border border-cyan-400 rounded px-3 py-1 text-sm focus:outline-none placeholder:text-gray-500/50 dark:placeholder:text-white/50"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-cyan-500 cursor-pointer"
            aria-label="Buscar"
            title="Buscar"
            onFocus={() => setExpandCategories(false)}
          >
            <Image
              src="/icons/search.svg"
              alt="Buscar"
              width={24}
              height={24}
            />
          </button>
        </form>
      </div>

      {/* Categorias */}
      <div className="flex flex-col md:flex-row lg:items-center lg:gap-2 w-full lg:w-auto">
        <span className="text-base font-title font-bold text-primary dark:text-white mb-1 lg:mb-0 lg:mr-2 mt-2 lg:mt-0">
          Categorias:
        </span>
        <fieldset
          className="flex gap-2 items-center"
          aria-label="Categorias"
          onMouseEnter={() => setExpandCategories(true)}
          onMouseLeave={() => setExpandCategories(false)}
          onFocus={() => setExpandCategories(true)}
        >
          {visibleCategories.map((cat) => (
            <Link
              href={`/blog?category=${cat.slug}`}
              title={cat.label}
              key={cat.slug}
              className="hidden lg:inline bg-cyan-500 hover:bg-cyan-600 text-white text-xs xl:text-sm px-3 py-2 rounded transition-colors text-nowrap"
            >
              {cat.label}
            </Link>
          ))}
          {!expandCategories && CATEGORIES.length > 3 && (
            <span className="hidden lg:inline text-cyan-500 text-xs cursor-pointer select-none">
              +{CATEGORIES.length - 3}
            </span>
          )}
        </fieldset>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap lg:hidden gap-2">
        {CATEGORIES.map((cat) => (
          <Link
            href={`/blog?category=${cat.slug}`}
            title={cat.label}
            key={cat.slug}
            className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs xl:text-sm px-3 py-2 rounded transition-colors"
          >
            {cat.label}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default BlogHeader;
