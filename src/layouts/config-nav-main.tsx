
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
          title: t('projects.arayanna'),
          path: paths.projects.arayanna,
        },
        {
          title: t('projects.arragya'),
          path: paths.projects.arragya,
        },
        {
          title: t('projects.ashram'),
          path: paths.projects.ashram,
        },
        {
          title: t('projects.bondhu'),
          path: paths.projects.bondhu,
        },
        {
          title: t('projects.cleanWaterAndSanitation'),
          path: paths.projects.cleanWaterAndSanitation,
        },
        {
          title: t('projects.educationForABetterTomorrow'),
          path: paths.projects.educationForABetterTomorrow,
        },
        {
          title: t('projects.foodDistribution'),
          path: paths.projects.foodDistribution,
        },
        {
          title: t('projects.qurbani'),
          path: paths.projects.qurbani,
        },
        {
          title: t('projects.selfEmployment'),
          path: paths.projects.selfEmployment,
        },
      ],
    },
    {
      order: '4',
      subheader: t('courses.root'),
      coverUrl: imagePath('career.webp'),
      items: [
        {
          title: t('courses.internship'),
          path: paths.courses.internship,
        },
        {
          title: t('courses.preMarriage'),
          path: paths.courses.preMarriage,
        },
        {
          title: t('courses.smartParenting'),
          path: paths.courses.smartParenting,
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
          title: t('more.whatWeDo'),
          path: paths.whatWeDo,
        },
        {
          title: t('more.whoWeAre'),
          path: paths.whoWeAre,
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
