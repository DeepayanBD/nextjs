
// ----------------------------------------------------------------------

const ROOTS = {
  COURSE: '/course',
  PROJECT: '/project',
};

// ----------------------------------------------------------------------

export const paths = {
  posts: {
    root: `/posts`,
    details: (slug: string) => `/posts/${slug}`,
  },

  // ROOT
  contact: '/contact',
  donate: '/donate',
  whatWeDo: '/what-we-do',
  whoWeAre: '/who-we-are',
  pages: 'pages',

  // Course
  course: {
    root: ROOTS.COURSE,
    preMarriage: `${ROOTS.COURSE}/pre-marriage`,
    smartParenting: `${ROOTS.COURSE}/smart-parenting`,
    internship: `${ROOTS.COURSE}/internship`,
  },

  // Project
  project: {
    root: ROOTS.PROJECT,
    selfEmployment: `${ROOTS.PROJECT}/maintenance`,
    foodDistribution: `${ROOTS.PROJECT}/food`,
    arragya: `${ROOTS.PROJECT}/arraggya`,
    arayanna: `${ROOTS.PROJECT}/maintenance`,
    asram: `${ROOTS.PROJECT}/maintenance`,
    bondhu: `${ROOTS.PROJECT}/maintenance`,
    educationForABetterTomorrow: `${ROOTS.PROJECT}/maintenance`,
    cleanWaterAndSanitation: `${ROOTS.PROJECT}/maintenance`,
    qurbani: `${ROOTS.PROJECT}/qurbani`,
  },
};
