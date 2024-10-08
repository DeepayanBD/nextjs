import type { IDateValue, IPagination } from "./common";

// ----------------------------------------------------------------------

export type IUser = {
    id: string;
    name: string;
    avatarUrl: string;
};

export type ICommentItem = {
    id: string;
    content: string;
    createdAt: IDateValue;
    user: IUser;
    userId: string;
    parent_id?: string;
    comments?: (ICommentItem & { tagUser?: string })[];
};

export type ICommentPagination = {
    data: ICommentItem[];
    meta: IPagination
}