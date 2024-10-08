import type { IDateValue, IPagination } from './common';

// ----------------------------------------------------------------------

export type IProductFilterValue = string | string[] | number | number[];

export type IProductFiltersProps = {
  tags: string[];
  inStock: boolean;
  brands: string[];
  shipping: string[];
  category: string;
  rating: string | null;
  price: [number, number];
};

export type IProductFilters = {
  rating: string;
  gender: string[];
  colors: string[];
  category: string;
  filterTag: string[];
  filterStock: boolean;
  priceRange: number[];
  filterBrand: string[];
  filterShipping: string[];
  filterCategories: string;
  filterRating: string | null;
  filterPrice: {
    start: number;
    end: number;
  };
};

// ----------------------------------------------------------------------

export type IProductReviewNewForm = {
  rating: number | null;
  review: string;
  name: string;
  email: string;
};

export type IProductReview = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  helpful: number;
  avatarUrl: string;
  postedAt: IDateValue;
  isPurchased: boolean;
  attachments?: string[];
};

export type IRatingItem = {
  name: string;
  count: number;
};

export type IProductItem = {
  id: string;
  sku: string;
  name: string;
  code: string;
  price: number;
  taxes: number;
  tags: string[];
  publish: string;
  coverUrl: string;
  images: string[];
  quantity: number;
  category: string;
  available: number;
  totalSold: number;
  description: string;
  totalRatings: number;
  totalReviews: number;
  inventoryType: string;
  subDescription: string;
  priceSale?: number;
  variants: {
    colors?: string[];
    gender?: string[];
    sizes?: string[];
    memories?: string[];
  }
  reviews: IProductReview[];
  createdAt: IDateValue;
  ratings: IRatingItem[];
  saleLabel: {
    enabled: boolean;
    content: string;
  };
  newLabel: {
    enabled: boolean;
    content: string;
  };
};

export type IProductItemsPagination = {
  data: IProductItem[];
  meta: IPagination;
}

// New types from the third set
export type IProductItemHero = {
  title: string;
  caption: string;
  coverUrl: string;
  label: string;
};

export type IProductItemCompare = {
  id: string;
  name: string;
  price: number;
  coverUrl: string;
  details: string[];
  ratingNumber: number;
};

export type IProductOrder = {
  id: string;
  item: string;
  price: number;
  status: string;
  orderId: string;
  deliveryDate: IDateValue;
};

export type IProductTableFilterValue = string | string[];

export type IProductTableFilters = {
  stock: string[];
  publish: string[];
};

// ----------------------------------------------------------------------

export type IProductCategory = { label: string; icon: string; path: string };

export type IProductBrand = { logo: string; name: string; description: string; path: string };
