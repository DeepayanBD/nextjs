'use client';

import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';

import { useBoolean } from 'src/hooks/use-boolean';

import { allLangs } from 'src/locales';

import { Main } from './main';
import { Footer } from './footer';
import { NavMobile } from './nav/mobile';
import { HeaderBase } from '../core/header-base';
import { NavDesktopBorder } from './nav/desktop';
import { LayoutSection } from '../core/layout-section';
import { navConfig as mainNavData } from '../config-nav-main';

import type { NavMainProps } from './nav/types';

// ----------------------------------------------------------------------

export type MainLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  data?: {
    nav?: NavMainProps['data'];
  };
  header?: {
    sx?: SxProps<Theme>;
  };
};

export function MainLayout({ sx, data, children, header }: MainLayoutProps) {
  const theme = useTheme();

  const mobileNavOpen = useBoolean();

  const layoutQuery: Breakpoint = 'md';

  const navData = data?.nav ?? mainNavData;

  return (
    <>
      <NavMobile data={navData} open={mobileNavOpen.value} onClose={mobileNavOpen.onFalse} />

      <LayoutSection
        /** **************************************
         * Header
         *************************************** */
        headerSection={
          <HeaderBase
            layoutQuery={layoutQuery}
            sx={header?.sx}
            onOpenNav={mobileNavOpen.onTrue}
            data={{
              langs: allLangs,
            }}
            slotsDisplay={{
              settings: false,
              localization: true,
            }}
            slots={{
              topArea: (
                <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
                  This is an info Alert.
                </Alert>
              ),
              rightAreaStart: (
                <NavDesktopBorder
                  data={navData}
                  sx={{
                    display: 'none',
                    [theme.breakpoints.up(layoutQuery)]: { mr: 2.5, display: 'flex' },
                  }}
                />
              ),
            }}
          />
        }
        /** **************************************
         * Footer
         *************************************** */
        footerSection={<Footer layoutQuery={layoutQuery} />}
        /** **************************************
         * Style
         *************************************** */
        sx={sx}
      >
        <Main>{children}</Main>
      </LayoutSection>
    </>
  );
}
