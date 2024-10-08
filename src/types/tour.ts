import type { IAuthor, IDateValue, ISocialLink, IDatePickerControl } from './common';

// ----------------------------------------------------------------------

export type ITourFilters = {
  services: string[];
  destination: string[];
  tourGuides: ITourGuide[];
  startDate: IDatePickerControl;
  endDate: IDatePickerControl;
};

export type ITourGuide = (IAuthor & { shareLinks: ISocialLink });

export type ITourBooker = {
  id: string;
  name: string;
  guests: number;
  avatarUrl: string;
};

export type ITourItem = {
  id: string;
  name: string;
  slug: string;
  price: number;
  priceSale: number;
  totalViews: number;
  totalReviews: number;
  ratingNumber: number;
  favorited: boolean;
  duration: string;
  createdAt: IDateValue;
  content: string;
  description: string;
  publish: string;
  images: string[];
  gallery: string[];
  heroUrl: string;
  coverUrl: string;
  tags: string[];
  highlights: string[];
  services: string[];
  destination: string;
  location: string;
  continent: string;
  languages: string[];
  bookers: ITourBooker[];
  tourGuides: ITourGuide[];
  available: {
    startDate: IDateValue;
    endDate: IDateValue;
  };
  program: {
    label: string;
    text: string;
  }[];
  shareLinks: ISocialLink;
};



export type ITourProps = {
  id: string;
  slug: string;
  price: number;
  heroUrl: string;
  createdAt: IDateValue;
  coverUrl: string;
  location: string;
  duration: string;
  continent: string;
  priceSale: number;
  gallery: string[];
  favorited: boolean;
  services: string[];
  description: string;
  languages: string[];
  ratingNumber: number;
  totalReviews: number;
  highlights: string[];
  tourGuide: ITourGuide;
  shareLinks: ISocialLink;
  available: {
    startDate: IDateValue;
    endDate: IDateValue;
  };
  program: {
    label: string;
    text: string;
  }[];
};

export type ITourCheckoutProps = {
  billingAddress: {
    firstName: string;
    lastName: string;
    fullAddress: string;
    fullAddress2: string;
  };
  shippingAddress: {
    firstName: string;
    lastName: string;
    fullAddress: string;
    fullAddress2: string;
  };
  paymentMethods: {
    methods: string;
    card: {
      cardNumber: string;
      cardHolder: string;
      expirationDate: string;
      ccv: string;
    };
  };
};