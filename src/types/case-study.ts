import type { IDateValue, ISocialLink } from './common';

// ----------------------------------------------------------------------

export type ICaseStudy = {
  id: string;
  title: string;
  content: string;
  heroUrl: string;
  createdAt: IDateValue;
  website: string;
  category: string;
  coverUrl: string;
  description: string;
  galleryImgs: string[];
  socialLinks?: ISocialLink;
};
