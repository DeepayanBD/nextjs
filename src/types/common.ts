export type ItemType = 'course' | 'project';

export type ICommonItem = {
  id: string;
  type: ItemType;
  slug: string;
  sideImage: string;
  images: string[]
};