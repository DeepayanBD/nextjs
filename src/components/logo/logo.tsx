'use client';

import type { BoxProps } from '@mui/material/Box';

import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';

import { RouterLink } from 'src/routes/components';

import { logoClasses } from './classes';

// ----------------------------------------------------------------------

export type LogoProps = BoxProps & {
  href?: string;
  iconOnly?: boolean;
  disableLink?: boolean;
};

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  (
    {
      width = 86,
      height = 35,
      iconOnly = false,
      disableLink = false,
      className,
      href = '/',
      sx,
      ...other
    },
    ref
  ) => {
    const logo = (
      <Box
        ref={ref}
        component="img"
        alt="Deepayan Icon"
        src="/assets/logo/deepayan-icon.png"
        width={width}
        height={height}
        sx={{ width, height, cursor: 'pointer', ...sx }}
      />
    );

    const logoFull = (
      <Box
        ref={ref}
        component="img"
        alt="Deepayan Logo"
        src="/assets/logo/logo.svg"
        width={width}
        height={height}
        sx={{ width, height, cursor: 'pointer', ...sx }}
      />
    );

    return (
      <NoSsr
        fallback={
          <Box
            width={width}
            height={height}
            className={logoClasses.root.concat(className ? ` ${className}` : '')}
            sx={{ flexShrink: 0, display: 'inline-flex', verticalAlign: 'middle', ...sx }}
          />
        }
      >
        <Box
          ref={ref}
          component={RouterLink}
          href={href}
          width={width}
          height={height}
          className={logoClasses.root.concat(className ? ` ${className}` : '')}
          aria-label="logo"
          sx={{
            flexShrink: 0,
            display: 'inline-flex',
            verticalAlign: 'middle',
            ...(disableLink && { pointerEvents: 'none' }),
            ...sx,
          }}
          {...other}
        >
          {iconOnly ? logo : logoFull}
        </Box>
      </NoSsr>
    );
  }
);
