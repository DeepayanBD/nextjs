import type { IDateValue } from "./common";

// ----------------------------------------------------------------------

export type IMailLabel = {
  id: string;
  type: string;
  name: string;
  color: string;
  unreadCount?: number;
};

export type IMailSender = {
  name: string;
  email: string;
  avatarUrl: string | null;
};

export type IMailAttachment = {
  id: string;
  name: string;
  size: number;
  type: string;
  path: string;
  preview: string;
  createdAt: IDateValue;
  modifiedAt: IDateValue;
};

export type IMail = {
  id: string;
  labelIds: string[];
  folder: string;
  isImportant: boolean;
  isStarred: boolean;
  isUnread: boolean;
  subject: string;
  message: string;
  createdAt: IDateValue;
  attachments: IMailAttachment[];
  from: IMailSender;
  to: IMailSender[];
};

export type IMails = {
  byId: Record<string, IMail>;
  allIds: string[];
};
