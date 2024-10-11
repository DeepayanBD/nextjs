'use client'

import type { BoxProps } from '@mui/material/Box';
import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
import { removeLastSlash } from 'src/routes/utils';

import { useBoolean } from 'src/hooks/use-boolean';

import { useTranslate } from 'src/locales';
import { _socials } from 'src/constants/socials';

import { Logo } from 'src/components/logo';
import { Iconify, SocialIcon } from 'src/components/iconify';

import { usePageLinks } from '../config-nav-main';
import { ThemeMode } from '../components/theme-mode';

import type { NavChildrenProps } from './nav/types';

// ----------------------------------------------------------------------

type BlockProps = {
  sx?: SxProps<Theme>;
  layoutQuery: Breakpoint;
  children: React.ReactNode;
};

function SectionBlock({ children, layoutQuery, sx }: BlockProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        gap: 2,
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.up(layoutQuery)]: {
          textAlign: 'left',
          alignItems: 'flex-start',
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

// ----------------------------------------------------------------------

export type FooterProps = BoxProps & {
  layoutQuery: Breakpoint;
};

export function Footer({ layoutQuery, sx, ...other }: FooterProps) {
  const theme = useTheme();

  const pathname = usePathname();

  const listItems = usePageLinks();

  const { t } = useTranslate('common')

  const renderInfo = (
    <>
      <Logo />

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {t('foundationDescription')}
      </Typography>
    </>
  );

  const renderSubscribe = (
    <>
      <div>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {t('stayInTouch')}
        </Typography>
        <Typography
          variant="caption"
          sx={{ maxWidth: 360, display: 'block', color: 'text.secondary' }}
        >
          {t('newsletterInvitation')}
        </Typography>
      </div>

      <TextField
        fullWidth
        hiddenLabel
        placeholder={t('emailAddress')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained" color="inherit" size="large" sx={{ mr: -1.25 }}>
                {t('subscribe')}
              </Button>
            </InputAdornment>
          ),
        }}
        sx={{ maxWidth: 420 }}
      />
    </>
  );

  const renderList = (
    <Box
      component="ul"
      sx={{
        columnGap: 4,
        display: 'none',
        columnCount: { xs: 1, lg: 2 },
        [theme.breakpoints.up(layoutQuery)]: {
          display: 'block',
        },
      }}
    >
      {listItems.map((list) => (
        <Stack
          component="li"
          gap={1.25}
          key={list.subheader}
          alignItems="flex-start"
          sx={{ mb: 2, breakInside: 'avoid' }}
        >
          <Typography variant="subtitle2">{list.subheader}</Typography>

          <Box component="ul" sx={{ gap: 'inherit', display: 'flex', flexDirection: 'column' }}>
            {list.items.map((item) => {
              const active = item.path === removeLastSlash(pathname);

              return (
                <Box component="li" key={item.title} sx={{ display: 'inline-flex' }}>
                  <Link
                    component={RouterLink}
                    href={item.path}
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': { color: 'text.primary' },
                      ...(active && { color: 'text.primary', fontWeight: 'fontWeightSemiBold' }),
                    }}
                  >
                    {item.title}
                  </Link>
                </Box>
              );
            })}
          </Box>
        </Stack>
      ))}
    </Box>
  );

  return (
    <footer>
      <Box
        component="footer"
        sx={{
          position: 'relative',
          bgcolor: 'background.default',
          borderTop: `solid 1px ${theme.vars.palette.divider}`,
          ...sx,
        }}
        {...other}
      >
        <Divider />

        <Container
          sx={{
            overflow: 'hidden',
            py: { xs: 8, md: 10 },
          }}
        >
          <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
            <Grid xs={12} md={5} lg={4}>
              <Stack spacing={{ xs: 3, md: 5 }}>
                <SectionBlock layoutQuery={layoutQuery} sx={{ gap: 3 }}>
                  {renderInfo}
                </SectionBlock>

                <SectionBlock layoutQuery={layoutQuery}>{renderSubscribe}</SectionBlock>

                <SectionBlock layoutQuery={layoutQuery}>
                  <Stack spacing={2}>
                    <Typography variant="h6">{t('themeMode')}</Typography>
                    <ThemeMode />
                  </Stack>
                </SectionBlock>
              </Stack>
            </Grid>

            <Grid xs={12} md={6} lg={6} component="nav">
              {renderList}
            </Grid>
          </Grid>
        </Container>

        <Divider />

        <Container>
          <Stack
            spacing={2.5}
            direction={{ xs: 'column-reverse', md: 'row' }}
            justifyContent="space-between"
            sx={{ py: 3, textAlign: 'center', display: 'flex', alignItems: 'center' }}
          >
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              Copyright © 2015&nbsp;-&nbsp;{new Date().getFullYear()} Deepayan Foundation
            </Typography>

            <Stack direction="row" spacing={1} justifyContent="center">
              {_socials.map((social) => (
                <IconButton
                  aria-label={`Follow on ${social.name}`}
                  key={social.name}
                  sx={{
                    bgcolor: alpha(social.color, 0.05),
                    '&:hover': {
                      bgcolor: alpha(social.color, 0.08),
                    },
                  }}
                  target="_blank"
                  href={social.path}
                >
                  <SocialIcon icon={social.name} />
                </IconButton>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </footer>
  );
}

// ----------------------------------------------------------------------

export function ListDesktop({ list }: { list: NavChildrenProps }) {
  const pathname = usePathname();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography variant="subtitle2">{list.subheader}</Typography>

      {list.items?.map((link) => {
        const active = pathname === link.path || pathname === `${link.path}/`;

        return (
          <Link
            component={RouterLink}
            key={link.title}
            href={link.path}
            variant="caption"
            sx={{
              color: 'text.secondary',
              '&:hover': {
                color: 'text.primary',
              },
              ...(active && {
                color: 'text.primary',
                fontWeight: 'fontWeightSemiBold',
              }),
            }}
          >
            {link.title}
          </Link>
        );
      })}
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function ListMobile({ list }: { list: NavChildrenProps }) {
  const pathname = usePathname();

  const listExpand = useBoolean();

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography
        variant="subtitle2"
        onClick={listExpand.onToggle}
        sx={{
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        {list.subheader}
        <Iconify
          width={16}
          icon={listExpand.value ? 'carbon:chevron-down' : 'carbon:chevron-right'}
          sx={{ ml: 0.5 }}
        />
      </Typography>

      <Collapse in={listExpand.value} unmountOnExit sx={{ width: 1 }}>
        <Stack spacing={1.5} alignItems="flex-start">
          {list.items?.map((link) => (
            <Link
              component={RouterLink}
              key={link.title}
              href={link.path}
              variant="caption"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'text.primary',
                },
                ...(pathname === `${link.path}/` && {
                  color: 'text.primary',
                  fontWeight: 'fontWeightSemiBold',
                }),
              }}
            >
              {link.title}
            </Link>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}
