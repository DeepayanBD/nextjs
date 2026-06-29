import type { ItemType } from 'src/types/common';

import { CONFIG } from 'src/config-global';

export const _id = [...Array(40)].map(
  (_, index) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`
);

// ----------------------------------------------------------------------
const { assetURL } = CONFIG.site;

export const _mock = {
  id: (index: number) => _id[index],
  // Image
  image: {
    sideImage: (type: ItemType, slug: string) => `${assetURL}/assets/uploads/${type}s/${slug}/side-image.webp`,
    course: (index: number, slug: string) => `${assetURL}/assets/uploads/courses/${slug}/img-${index + 1}.webp`,
    project: (index: number, slug: string) => `${assetURL}/assets/uploads/projects/${slug}/img-${index + 1}.webp`
  }
};
