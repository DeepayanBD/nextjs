
import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';
import { useTranslate } from 'src/locales';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

const imagePath = (name: string) => `${CONFIG.site.assetURL}/assets/images/menu/${name}`;

export const usePageLinks = () => {
  const { t } = useTranslate('navbar'); // Using t function from react-i18next

  return [
    {
      subheader: t('projects'),
      items: [
        {
          title: t('selfEmployment'),
          path: paths.project.selfEmployment,
        },
        {
          title: t('foodDistribution'),
          path: paths.project.foodDistribution,
        },
        {
          title: t('deepayanArragya'),
          path: paths.project.deepayanArragya,
        },
        {
          title: t('deepayanArayanna'),
          path: paths.project.deepayanArayanna,
        },
        {
          title: t('deepayanAsram'),
          path: paths.project.deepayanAsram,
        },
        {
          title: t('deepayanBondhu'),
          path: paths.project.deepayanBondhu,
        },
        {
          title: t('educationForABetterTomorrow'),
          path: paths.project.educationForABetterTomorrow,
        },
        {
          title: t('cleanWaterAndSanitation'),
          path: paths.project.cleanWaterAndSanitation,
        },
        {
          title: t('kurbani'),
          path: paths.project.kurbani,
        },
      ],
    },
    {
      order: '4',
      subheader: t('courses'),
      coverUrl: imagePath('career.webp'),
      items: [
        {
          title: t('preMarriage'),
          path: paths.course.preMarriage,
        },
        {
          title: t('smartParenting'),
          path: paths.course.smartParenting,
        },
        {
          title: t('internship'),
          path: paths.course.internship,
        },
      ],
    },
    {
      order: '6',
      subheader: t('more'),
      coverUrl: imagePath('e-commerce.webp'),
      items: [
        { title: t('contactUs'), path: paths.contact },
        {
          title: t('whoWeAre'),
          path: paths.whoWeAre,
        },
        {
          title: t('whatWeDo'),
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
      children: usePageLinks(), // Fetch the translated page links
    },
  ];
};
