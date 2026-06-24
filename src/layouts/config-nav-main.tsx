
import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { useTranslate } from 'src/locales';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const imagePath = (name: string) => `${CONFIG.site.assetURL}/assets/images/menu/${name}`;

export const usePageLinks = () => {
  const { t } = useTranslate('navbar');

  return [
    {
      subheader: t('projects.root'),
      items: [
        {
          title: t('projects.selfEmployment'),
          path: paths.project.selfEmployment,
        },
        {
          title: t('projects.foodDistribution'),
          path: paths.project.foodDistribution,
        },
        {
          title: t('projects.arragya'),
          path: paths.project.arragya,
        },
        {
          title: t('projects.arayanna'),
          path: paths.project.arayanna,
        },
        {
          title: t('projects.asram'),
          path: paths.project.asram,
        },
        {
          title: t('projects.bondhu'),
          path: paths.project.bondhu,
        },
        {
          title: t('projects.educationForABetterTomorrow'),
          path: paths.project.educationForABetterTomorrow,
        },
        {
          title: t('projects.cleanWaterAndSanitation'),
          path: paths.project.cleanWaterAndSanitation,
        },
        {
          title: t('projects.qurbani'),
          path: paths.project.qurbani,
        },
      ],
    },
    {
      order: '4',
      subheader: t('courses.root'),
      coverUrl: imagePath('career.webp'),
      items: [
        {
          title: t('courses.preMarriage'),
          path: paths.course.preMarriage,
        },
        {
          title: t('courses.smartParenting'),
          path: paths.course.smartParenting,
        },
        {
          title: t('courses.internship'),
          path: paths.course.internship,
        },
      ],
    },
    {
      order: '6',
      subheader: t('more.root'),
      coverUrl: imagePath('e-commerce.webp'),
      items: [
        { title: t('more.contactUs'), path: paths.contact },
        {
          title: t('more.whoWeAre'),
          path: paths.whoWeAre,
        },
        {
          title: t('more.whatWeDo'),
          path: paths.whatWeDo,
        },
      ],
    },
  ];
};

export const useNavConfig = () => {
  const { t } = useTranslate('navbar');

  return [
    { title: t('home'), path: '/', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
    {
      title: t('pages'),
      path: paths.pages,
      icon: <Iconify width={22} icon="solar:file-bold-duotone" />,
      children: usePageLinks(),
    },
  ];
};
