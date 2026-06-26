
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
  contact: '/contact-us',
  donate: '/donate',
  whatWeDo: '/what-we-do',
  whoWeAre: '/who-we-are',
  pages: 'pages',

  // Courses
  courses: {
    root: ROOTS.COURSES,
    internship: `${ROOTS.COURSES}/internship`,
    preMarriage: `${ROOTS.COURSES}/pre-marriage`,
    smartParenting: `${ROOTS.COURSES}/smart-parenting`,
  },

  // Projects
  projects: {
    root: ROOTS.PROJECTS,
    arayanna: `${ROOTS.PROJECTS}/arayanna`,
    arragya: `${ROOTS.PROJECTS}/arraggya`,
    ashram: `${ROOTS.PROJECTS}/ashram`,
    bondhu: `${ROOTS.PROJECTS}/bondhu`,
    cleanWaterAndSanitation: `${ROOTS.PROJECTS}/clean-water-and-sanitation`,
    educationForABetterTomorrow: `${ROOTS.PROJECTS}/education-for-a-better-tomorrow`,
    foodDistribution: `${ROOTS.PROJECTS}/food-distribution`,
    qurbani: `${ROOTS.PROJECTS}/qurbani`,
    selfEmployment: `${ROOTS.PROJECTS}/self-employment`,
  },
};
