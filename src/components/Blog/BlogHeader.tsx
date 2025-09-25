"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { cn } from "@/utils/cn";
import BlogCategoryBtn from "./BlogCategoryBtn";

const CATEGORIES = [
  { slug: "mobile", name: "Mobile", description: "Desenvolvimento Mobile" },
  {
    slug: "programacao",
    name: "Programação",
    description: "Desenvolvimento de Software",
  },
  {
    slug: "frontend",
    name: "Frontend",
    description: "Desenvolvimento Frontend",
  },
  { slug: "devops", name: "DevOps", description: "Práticas de DevOps" },
  {
    slug: "ux-design",
    name: "UX & Design",
    description: "Design de Experiência do Usuário",
  },
  {
    slug: "data-science",
    name: "Data Science",
    description: "Ciência de Dados",
  },
  {
    slug: "inovacao-gestao",
    name: "Inovação & Gestão",
    description: "Inovação e Gestão",
  },
];

function BlogHeader() {
  const searchParams = useSearchParams();
  const [expandCategories, setExpandCategories] = useState(false);
  const [searchTerm, setSearchTerm] = useState(searchParams.get("s") || "");
  const router = useRouter();

  const visibleCategories = expandCategories
    ? CATEGORIES
    : CATEGORIES.slice(0, 3);

  function handleCleanSearch() {
    setSearchTerm("");
    router.push(`/#blog`);
  }

  return (
    <header className="w-full flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center lg:justify-between min-h-10 py-4">
      <div
        className="scroll-mt-[100px] flex flex-col lg:flex-row lg:items-center lg:gap-4 w-full min-h-10"
        id="blog"
      >
        <span className="font-bold font-title text-base xl:text-2xl text-primary dark:text-white mb-2 lg:mb-0">
          Minhas postagens
        </span>
        <form
          className={cn(
            "relative w-full lg:w-64",
            expandCategories && "lg:w-0 overflow-hidden",
          )}
          onSubmit={async (e) => {
            e.preventDefault();
            const query = searchTerm.trim();
            if (!query) return;
            router.push(`/?s=${encodeURIComponent(query)}#blog`);
          }}
        >
          <input
            type="text"
            name="s"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-10 border border-cyan-400 rounded px-3 py-1 text-sm focus:outline-none placeholder:text-gray-500/50 dark:placeholder:text-white/50"
          />
          {searchTerm && (
            <button
              type="button"
              className="absolute right-10 top-1/2 -translate-y-1/2 text-red-400 font-semibold cursor-pointer"
              aria-label="Limpar"
              title="Limpar"
              onClick={() => handleCleanSearch()}
            >
              X
            </button>
          )}
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
            <BlogCategoryBtn
              cat={cat}
              setSearchTerm={setSearchTerm}
              className={cn(
                "hidden lg:inline bg-cyan-500 hover:bg-cyan-600 text-white text-xs xl:text-sm px-3 py-2 rounded transition-colors text-nowrap",
                searchParams.get("category") === cat.slug &&
                  "bg-primary hover:bg-primary",
              )}
              key={cat.slug}
            />
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
          <BlogCategoryBtn
            cat={cat}
            setSearchTerm={setSearchTerm}
            key={cat.slug}
            className={cn(
              "bg-cyan-500 hover:bg-cyan-600 text-white text-xs xl:text-sm px-3 py-2 rounded transition-colors",
              searchParams.get("category") === cat.slug &&
                "bg-primary hover:bg-primary",
            )}
          />
        ))}
      </div>
    </header>
  );
}

export default BlogHeader;
