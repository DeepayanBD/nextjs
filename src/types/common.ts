import type { Dayjs } from 'dayjs';

// ----------------------------------------------------------------------

export type IPaymentCard = {
  id: string;
  cardType: string;
  primary?: boolean;
  cardNumber: string;
};

export type IAddressItem = {
  id?: string;
  name: string;
  company?: string;
  primary?: boolean;
  fullAddress: string;
  phoneNumber?: string;
  addressType?: string;
};

export type IDateValue = string | number | null;

export type IDatePickerControl = Dayjs | null;

export type ISocialLink = {
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
};

export type IPagination = {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  firstPageUrl: string;
  lastPageUrl: string;
  nextPageUrl: string | null;
  prevPageUrl: string | null;
}

export type IAuthor = {
  id: string;
  name: string;
  role: string;
  about: string;
  quotes: string;
  avatarUrl: string;
  verified?: boolean;
  phoneNumber?: string;
  ratingNumber?: number;
  totalReviews?: number;
  socialLinks?: ISocialLink;
  createdAt?: IDateValue; // Added from IPostAuthor
};
