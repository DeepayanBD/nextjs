import type { IDateValue } from "./common";

// ----------------------------------------------------------------------

export type ITestimonial = {
  id: string;
  name: string;
  role: string;
  review: string;
  avatarUrl: string;
  ratingNumber: number;
  createdAt: IDateValue;
};
