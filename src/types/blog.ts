import type { ICommentPagination } from "./comment";
import type { IAuthor, IDateValue, IPagination, ISocialLink } from "./common";

// ----------------------------------------------------------------------

export type IPostFilterValue = string;

export type IPostFilters = {
  'filter[publish]': string;
};

// ----------------------------------------------------------------------

export type IPostHero = {
  title: string;
  coverUrl: string;
  createdAt?: IDateValue;
  author?: {
    name: string;
    avatarUrl: string;
  };
};

// ----------------------------------------------------------------------

export type IPostItem = {
  id: string;
  title: string;
  slug: string;
  tags: string[];
  publish: string;
  content: string;
  duration: string;
  coverUrl: string;
  metaTitle: string;
  totalViews: number;
  totalShares: number;
  description: string;
  totalFavorites: number;
  metaKeywords: string[];
  metaDescription: string;
  totalComments: number;
  comments: ICommentPagination;
  createdAt: IDateValue;
  favoritePerson?: {
    name: string;
    avatarUrl: string;
  }[];
  author: IAuthor;
  category: string;
  favorited: boolean;
  shareLinks?: ISocialLink;
};

// ----------------------------------------------------------------------

export type IPostItemsPagination = {
  data: IPostItem[];
  meta: IPagination;
};

// ----------------------------------------------------------------------

export type IBlogCategory = {
  label: string;
  path: string;
};
