"use server";

type Pagination = {
  page: number;
  limit: number;
};

type CategoryPagination = Pagination & {
  category: string;
};

type TagPagination = Pagination & {
  tag: string;
};

const API_BASE_URL = "https://nextjs-alura-teste.vercel.app/api";
const revalidate = 60;

export const getPosts = async (
  { page, limit }: Pagination = { page: 1, limit: 6 },
) => {
  const res = await fetch(`${API_BASE_URL}/posts?page=${page}&limit=${limit}`, {
    next: { revalidate: revalidate },
  });
  if (!res.ok) throw new Error("Erro ao buscar posts");
  const data = await res.json();
  return data;
};

export const getPostById = async (id: string) => {
  const res = await fetch(`${API_BASE_URL}/posts/id/${id}`, {
    next: { revalidate: revalidate },
  });
  if (!res.ok) throw new Error(`Erro ao buscar post: ${id}`);
  return res.json();
};

export const getPostsByTag = async ({
  tag,
  page = 1,
  limit = 6,
}: TagPagination) => {
  const res = await fetch(
    `${API_BASE_URL}/tags/${tag}?page=${page}&limit=${limit}`,
    {
      next: { revalidate: revalidate },
    },
  );
  if (!res.ok) throw new Error(`Erro ao buscar posts por tag: ${tag}`);
  return res.json();
};

export const getPostsByCategory = async ({
  category,
  page = 1,
  limit = 6,
}: CategoryPagination) => {
  const res = await fetch(
    `${API_BASE_URL}/categories/${category}?page=${page}&limit=${limit}`,
    {
      next: { revalidate: revalidate },
    },
  );
  if (!res.ok)
    throw new Error(`Erro ao buscar posts por categoria: ${category}`);
  return res.json();
};
