
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
    foodDistribution: `${ROOTS.PROJECT}/maintenance`,
    deepayanArragya: `${ROOTS.PROJECT}/arraggya`,
    deepayanArayanna: `${ROOTS.PROJECT}/maintenance`,
    deepayanAsram: `${ROOTS.PROJECT}/maintenance`,
    deepayanBondhu: `${ROOTS.PROJECT}/maintenance`,
    educationForABetterTomorrow: `${ROOTS.PROJECT}/maintenance`,
    cleanWaterAndSanitation: `${ROOTS.PROJECT}/maintenance`,
    kurbani: `${ROOTS.PROJECT}/kurbani`,
  },
};
