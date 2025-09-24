export type CategoryType = {
  slug: string;
  name: string;
  description: string;
};

export type TagType = {
  slug: string;
  name: string;
};

export type PostType = {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  likes: number;
  category: CategoryType;
  tags: TagType[];
  imageUrl: string;
};
