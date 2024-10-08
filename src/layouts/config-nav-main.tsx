import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const imagePath = (name: string) => `${CONFIG.site.assetURL}/assets/images/menu/${name}`;

export const pageLinks = [
  {
    subheader: 'Projects',
    items: [
      {
        title: 'Self Employment',
        path: paths.project.selfEmployment,
      },
      {
        title: 'Food Distribution',
        path: paths.project.foodDistribution,
      },
      {
        title: 'Deepayan Arragya',
        path: paths.project.deepayanArragya,
      },
      {
        title: 'Deepayan Arayanna',
        path: paths.project.deepayanArayanna,
      },
      {
        title: 'Deepayan Asram',
        path: paths.project.deepayanAsram,
      },
      {
        title: 'Deepayan Bondhu',
        path: paths.project.deepayanBondhu,
      },
      {
        title: 'Education For A Better Tomorrow',
        path: paths.project.educationForABetterTomorrow,
      },
      {
        title: 'Clean Water And Sanitation',
        path: paths.project.cleanWaterAndSanitation,
      },
      {
        title: 'Kurbani',
        path: paths.project.kurbani,
      },
    ],
  },
  {
    order: '4',
    subheader: 'Courses',
    coverUrl: imagePath('career.webp'),
    items: [
      {
        title: 'Pre-Marriage',
        path: paths.course.preMarriage,
      },
      {
        title: 'Smart Parenting',
        path: paths.course.smartParenting,
      },
      {
        title: 'Internship',
        path: paths.course.internship,
      },
    ],
  },
  {
    order: '6',
    subheader: 'More',
    coverUrl: imagePath('e-commerce.webp'),
    items: [
      { title: 'Contact us', path: paths.contact },
      {
        title: 'Who We Are',
        path: paths.whoWeAre,
      },
      {
        title: 'What We Do',
        path: paths.whatWeDo,
      },
    ],
  },
];

export const navConfig = [
  { title: 'Home', path: '/', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  {
    title: 'Pages',
    path: paths.pages,
    icon: <Iconify width={22} icon="solar:file-bold-duotone" />,
    children: pageLinks,
  },
];
