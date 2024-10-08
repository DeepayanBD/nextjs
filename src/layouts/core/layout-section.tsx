'use client';

import type { Theme, SxProps, CSSObject } from '@mui/material/styles';

import Box from '@mui/material/Box';
import GlobalStyles from '@mui/material/GlobalStyles';

import { useResponsive } from 'src/hooks/use-responsive';

import { layoutClasses } from '../classes';

// ----------------------------------------------------------------------

export type LayoutSectionProps = {
  sx?: SxProps<Theme>;
  cssVars?: CSSObject;
  children?: React.ReactNode;
  footerSection?: React.ReactNode;
  headerSection?: React.ReactNode;
  sidebarSection?: React.ReactNode;
  rightSidebarSection?: React.ReactNode;
};

export function LayoutSection({
  sx,
  cssVars,
  children,
  footerSection,
  headerSection,
  sidebarSection,
  rightSidebarSection,
}: LayoutSectionProps) {
  const globalStyles = (
    <GlobalStyles
      styles={{
        body: {
          '--layout-nav-zIndex': 1101,
          '--layout-nav-mobile-width': '320px',
          '--layout-header-blur': '8px',
          '--layout-header-zIndex': 1100,
          '--layout-header-mobile-height': '64px',
          '--layout-header-desktop-height': '72px',
          ...cssVars,
        },
      }}
    />
  );

  const lgUp = useResponsive('up', 'lg');

  return (
    <>
      {globalStyles}

      <Box id="root__layout" className={layoutClasses.root} sx={sx}>
        {sidebarSection && rightSidebarSection && lgUp ? (
          <>
            {sidebarSection}
            <Box
              display="flex"
              flex="1 1 auto"
              flexDirection="column"
              className={`${layoutClasses.hasSidebar} ${layoutClasses.hasRightSidebar}`}
            >
              {headerSection}
              {children}
              {footerSection}
            </Box>
            {rightSidebarSection}
          </>
        ) : sidebarSection ? (
          <>
            {sidebarSection}
            <Box
              display="flex"
              flex="1 1 auto"
              flexDirection="column"
              className={layoutClasses.hasSidebar}
            >
              {headerSection}
              {children}
              {footerSection}
            </Box>
          </>
        ) : (
          <>
            {headerSection}
            {children}
            {footerSection}
          </>
        )}
      </Box>
    </>
  );
}
