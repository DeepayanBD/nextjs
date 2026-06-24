
// ----------------------------------------------------------------------

const ROOTS = {
  COURSES: '/courses',
  PROJECTS: '/projects',
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

  // Courses
  courses: {
    root: ROOTS.COURSES,
    preMarriage: `${ROOTS.COURSES}/pre-marriage`,
    smartParenting: `${ROOTS.COURSES}/smart-parenting`,
    internship: `${ROOTS.COURSES}/internship`,
  },

  // Projects
  projects: {
    root: ROOTS.PROJECTS,
    selfEmployment: `${ROOTS.PROJECTS}/maintenance`,
    foodDistribution: `${ROOTS.PROJECTS}/food`,
    arragya: `${ROOTS.PROJECTS}/arraggya`,
    arayanna: `${ROOTS.PROJECTS}/maintenance`,
    asram: `${ROOTS.PROJECTS}/maintenance`,
    bondhu: `${ROOTS.PROJECTS}/maintenance`,
    educationForABetterTomorrow: `${ROOTS.PROJECTS}/maintenance`,
    cleanWaterAndSanitation: `${ROOTS.PROJECTS}/maintenance`,
    qurbani: `${ROOTS.PROJECTS}/qurbani`,
  },
};
