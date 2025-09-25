"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { PaginationData } from "@/types/PaginationType";

interface BlogPaginationProps {
  pagination: PaginationData;
}

function BlogPagination({ pagination }: BlogPaginationProps) {
  const searchParams = useSearchParams();

  const { currentPage, totalPages, totalPosts, hasNextPage, hasPreviousPage } =
    pagination;

  // Função para criar URL com parâmetros existentes
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `/?${params.toString()}#blog`;
  };

  // Gerar números das páginas para exibir
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Se há poucas páginas, mostra todas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Lógica para páginas com reticências
      if (currentPage <= 3) {
        // Início: 1, 2, 3, 4, ..., totalPages
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("ellipsis-start");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Final: 1, ..., totalPages-3, totalPages-2, totalPages-1, totalPages
        pages.push(1);
        pages.push("ellipsis-end");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Meio: 1, ..., currentPage-1, currentPage, currentPage+1, ..., totalPages
        pages.push(1);
        pages.push("ellipsis-start");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("ellipsis-end");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav
      className="flex flex-col gap-4 items-center py-6"
      aria-label="Paginação"
    >
      {/* Controles de paginação */}
      <div className="flex items-center gap-2">
        {/* Botão Anterior */}
        {hasPreviousPage ? (
          <Link
            href={createPageUrl(currentPage - 1)}
            className="hidden md:flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-2 rounded transition-colors"
            aria-label="Página anterior"
          >
            Anterior
          </Link>
        ) : (
          <button
            type="button"
            disabled
            className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 text-sm px-3 py-2 rounded cursor-not-allowed"
            aria-label="Página anterior (indisponível)"
          >
            Anterior
          </button>
        )}

        {/* Números das páginas */}
        <div className="flex items-center gap-1">
          {pageNumbers.map((page) => {
            if (typeof page === "string") {
              return (
                <span
                  key={page}
                  className="px-2 py-1 text-gray-500 dark:text-gray-400"
                >
                  ...
                </span>
              );
            }

            const pageNum = page as number;
            const isCurrentPage = pageNum === currentPage;

            return (
              <Link
                key={pageNum}
                href={createPageUrl(pageNum)}
                className={`
                  min-w-[36px] h-9 flex items-center justify-center text-sm rounded transition-colors
                  ${
                    isCurrentPage
                      ? "bg-cyan-500 text-white font-semibold"
                      : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }
                `}
                aria-label={
                  isCurrentPage
                    ? `Página atual ${pageNum}`
                    : `Ir para página ${pageNum}`
                }
                aria-current={isCurrentPage ? "page" : undefined}
              >
                {pageNum}
              </Link>
            );
          })}
        </div>

        {/* Botão Próximo */}
        {hasNextPage ? (
          <Link
            href={createPageUrl(currentPage + 1)}
            className="hidden md:flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-2 rounded transition-colors"
            aria-label="Próxima página"
          >
            Próximo
          </Link>
        ) : (
          <button
            type="button"
            disabled
            className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 text-sm px-3 py-2 rounded cursor-not-allowed"
            aria-label="Próxima página (indisponível)"
          >
            Próximo
          </button>
        )}
      </div>

      {/* Informações de posts */}
      <div className="text-sm text-gray-600 dark:text-gray-400">
        Mostrando página {currentPage} de {totalPages} ({totalPosts} posts no
        total)
      </div>
    </nav>
  );
}

export default BlogPagination;
