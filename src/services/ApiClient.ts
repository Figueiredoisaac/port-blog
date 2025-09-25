"use server";

type Pagination = {
  page: number;
  limit: number;
};

type SearchPagination = Pagination & {
  search?: string;
};

type CategoryPagination = Pagination & {
  category: string;
};

type TagPagination = Pagination & {
  tag: string;
};

const API_BASE_URL = process.env.API_BASE_URL;
const DEFAULT_REVALIDATE = 300;

type CacheOptions = {
  cache?: "force-cache" | "no-store";
  revalidate?: number;
};

const apiFetch = async (url: string, options: CacheOptions = {}) => {
  const { cache = "force-cache", revalidate = DEFAULT_REVALIDATE } = options;

  const fetchOptions: RequestInit = {
    cache,
  };

  // Só adiciona revalidate se cache for 'force-cache'
  if (cache === "force-cache") {
    fetchOptions.next = { revalidate };
  }

  const res = await fetch(url, fetchOptions);

  if (!res.ok) {
    throw new Error(`Erro na requisição: ${res.status} ${res.statusText}`);
  }

  return res.json();
};

export const getPosts = async (
  { page, limit, search }: SearchPagination = { page: 1, limit: 6 },
  options: CacheOptions = {},
) => {
  let url = `${API_BASE_URL}?page=${page}&limit=${limit}`;
  if (search) {
    url += `&search=${encodeURIComponent(search)}`;
  }
  return apiFetch(url, options);
};

export const getPostById = async (id: string, options: CacheOptions = {}) => {
  const url = `${API_BASE_URL}/id/${id}`;
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
  const url = `${API_BASE_URL}/category/${category}?page=${page}&limit=${limit}`;
  return apiFetch(url, options);
};
