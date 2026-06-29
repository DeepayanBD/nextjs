import type { ICommonItem } from 'src/types/common';

import { _mock } from './_mock';

const PROJECT_SLUGS = [
    'arayanna',
    'arraggya',
    'ashram',
    'bondhu',
    'clean-water-and-sanitation',
    'education-for-a-better-tomorrow',
    'food-distribution',
    'qurbani',
    'self-employment',
];

export const _mockProjects: ICommonItem[] = [...Array(PROJECT_SLUGS.length)].map((_, index) => {
    const slug = PROJECT_SLUGS[index];

    return {
        id: _mock.id(index),
        type: 'project',
        slug,
        sideImage: _mock.image.sideImage('project', slug),
        images: [...Array(8)].map((__, imgIndex) => `${_mock.image.project(imgIndex, slug)}`),
    };
});
