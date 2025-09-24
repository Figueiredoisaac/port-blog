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
const DEFAULT_REVALIDATE = 60;

type CacheOptions = {
  cache?: 'force-cache' | 'no-store';
  revalidate?: number;
};

const apiFetch = async (url: string, options: CacheOptions = {}) => {
  const { cache = 'force-cache', revalidate = DEFAULT_REVALIDATE } = options;

  const fetchOptions: RequestInit = {
    cache,
  };

  // Só adiciona revalidate se cache for 'force-cache'
  if (cache === 'force-cache') {
    fetchOptions.next = { revalidate };
  }

  const res = await fetch(url, fetchOptions);

  if (!res.ok) {
    throw new Error(`Erro na requisição: ${res.status} ${res.statusText}`);
  }

  return res.json();
};

export const getPosts = async (
  { page, limit }: Pagination = { page: 1, limit: 6 },
  options: CacheOptions = {},
) => {
  const url = `${API_BASE_URL}/posts?page=${page}&limit=${limit}`;
  return apiFetch(url, options);
};

export const getPostById = async (
  id: string,
  options: CacheOptions = {},
) => {
  const url = `${API_BASE_URL}/posts/id/${id}`;
  return apiFetch(url, options);
};

export const getPostsByTag = async (
  { tag, page = 1, limit = 6 }: TagPagination,
  options: CacheOptions = {},
) => {
  const url = `${API_BASE_URL}/tags/${tag}?page=${page}&limit=${limit}`;
  return apiFetch(url, options);
};

export const getPostsByCategory = async (
  { category, page = 1, limit = 6 }: CategoryPagination,
  options: CacheOptions = {},
) => {
  const url = `${API_BASE_URL}/categories/${category}?page=${page}&limit=${limit}`;
  return apiFetch(url, options);
};
