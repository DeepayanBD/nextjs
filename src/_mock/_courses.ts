import type { ICommonItem } from 'src/types/common';

import { _mock } from './_mock';

const COURSE_SLUGS = ['internship', 'pre-marriage', 'smart-parenting'];

export const _mockCourses: ICommonItem[] = [...Array(COURSE_SLUGS.length)].map((_, index) => {
    const slug = COURSE_SLUGS[index];

    return {
        id: _mock.id(index),
        type: 'course',
        slug,
        sideImage: _mock.image.sideImage('course', slug),
        images: [...Array(8)].map((__, imgIndex) => `${_mock.image.course(imgIndex, slug)}`),
    };
});