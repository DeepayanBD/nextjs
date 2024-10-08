import type { IUserItem } from "./user";
import type { IDateValue } from "./common";

// ----------------------------------------------------------------------

export type IReviewReplyComment = {
  id: string;
  userId: string;
  user: IUserItem;
  message: string;
  createdAt: IDateValue;
  tagUser?: string;
};

// ----------------------------------------------------------------------

export type IReviewItem = {
  id: string;
  userId: string;
  rating: number;
  message: string;
  helpful: number;
  createdAt: IDateValue;
  user: IUserItem;
  parentId?: string; // Optional for replies
  productId?: string; // Optional for product reference
  isPurchased?: boolean;
  attachments?: string[];
  replyComments?: IReviewReplyComment[];
};

export type IReviewItemProp = {
  id: string;
  name: string;
  rating: number;
  createdAt: IDateValue;
  message: string;
  helpful: number;
  avatarUrl: string;
  isPurchased?: boolean;
  attachments?: string[];
  replyComments: IReviewReplyComment[];
};