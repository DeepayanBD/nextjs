import 'src/global.css';

import type { Metadata, Viewport } from 'next';

import deepRec from '@/public/assets/logo/deepayan-logo-rectangular.png';

import { CONFIG } from 'src/config-global';
import { LocalizationProvider } from 'src/locales';
import { detectLanguage } from 'src/locales/server';
import { ThemeProvider } from 'src/theme/theme-provider';
import { I18nProvider } from 'src/locales/i18n-provider';
import { getInitColorSchemeScript } from 'src/theme/color-scheme-script';

import { Snackbar } from 'src/components/snackbar';
import { detectSettings } from 'src/components/settings/server';
import { SettingsDrawer, defaultSettings, SettingsProvider } from 'src/components/settings';

export const viewport: Viewport = {
  themeColor: 'blue',
};

export const metadata: Metadata = {
  title: {
    template: `%s – ${CONFIG.site.name}`,
    default: CONFIG.site.name,
  },
  description:
    'The Deepayan Foundation is a non-political non-profit organization that empowers underprivileged people of the society in Bangladesh through various social welfare initiatives. We have various projects. Our work improves lives in areas like healthcare, education, and poverty reduction. You can help the underprivileged people of the society to move forward.',
  keywords: ['Deepayan', 'Foundation', 'Bangladesh', 'NGO'],
  metadataBase: new URL('https://www.deepayan.org'),
  openGraph: {
    title: CONFIG.site.name,
    description:
      'The Deepayan Foundation is a non-political non-profit organization that empowers underprivileged people of the society in Bangladesh through various social welfare initiatives. We have various projects. Our work improves lives in areas like healthcare, education, and poverty reduction. You can help the underprivileged people of the society to move forward.',
    url: 'https://www.deepayan.org',
    siteName: CONFIG.site.name,
    images: [
      {
        url: deepRec.src, // Must be an absolute URL
        width: 602,
        height: 301,
        alt: 'Deepayan Foundation Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: CONFIG.site.name,
    description:
      'The Deepayan Foundation is a non-political non-profit organization that empowers underprivileged people of the society in Bangladesh through various social welfare initiatives. We have various projects. Our work improves lives in areas like healthcare, education, and poverty reduction. You can help the underprivileged people of the society to move forward.',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: [deepRec.src],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'cian9Q_-_nQFUKrXRYOHjQIf6KHImkFlI2yPLsKB9YI',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = CONFIG.isStaticExport ? 'en' : await detectLanguage();

  const settings = CONFIG.isStaticExport ? defaultSettings : await detectSettings();
  return (
    <html lang={lang ?? 'en'}>
      <body>
        {getInitColorSchemeScript}

        <I18nProvider lang={CONFIG.isStaticExport ? undefined : lang}>
          <LocalizationProvider>
            <SettingsProvider
              settings={settings}
              caches={CONFIG.isStaticExport ? 'localStorage' : 'cookie'}
            >
              <ThemeProvider>
                <Snackbar />
                <SettingsDrawer />
                {children}
              </ThemeProvider>
            </SettingsProvider>
          </LocalizationProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
