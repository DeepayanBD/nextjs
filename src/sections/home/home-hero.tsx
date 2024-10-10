'use client';

import Image from 'next/image';

import { Box, Grid, Button, Container, Typography } from '@mui/material';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useTranslate } from 'src/locales';
import { banglaFont } from 'src/theme/core';
import { varAlpha, bgGradient } from 'src/theme/styles';

export function HomeHero() {
  const { t } = useTranslate('donation');
  return (
    <Box
      sx={{
        minHeight: '100vh',
        maxHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={(theme) => ({
          position: 'absolute',
          top: 0,
          left: 0,
          // opacity: 0.5,
          height: '100%',
          width: '100%',
          ...bgGradient({
            color: `to bottom left, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.8)} 20%, ${varAlpha(theme.vars.palette.success.darkChannel, 0.8)} 50%, ${varAlpha(theme.vars.palette.primary.darkChannel, 0.9)}`,
            imgUrl: `/assets/uploads/WhatsApp-Image-2022-03-29-at-11.04.46-AM.jpeg`,
          }),
        })}
      />

      <Container>
        <Grid
          container
          spacing={10}
          sx={{
            position: 'relative',
            maxWidth: 'xl',
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              mr: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box>
              <Typography
                variant="h4"
                component="p"
                align="center"
                sx={{ mb: { xs: 4, md: 6 }, color: 'black', fontFamily: banglaFont }}
              >
                {t('becauseTogether')}
              </Typography>
              <Typography
                variant="h2"
                component="h1"
                align="center"
                fontWeight="bold"
                sx={{
                  mb: { xs: 6, md: 8 },
                  color: 'black',
                  fontFamily: banglaFont,
                }}
              >
                {t('forHumaneWorld')}
              </Typography>

              <Box sx={{ display: 'flex', gap: 2.5, flexDirection: { xs: 'column', sm: 'row' } }}>
                <Button
                  fullWidth
                  component={RouterLink}
                  href={paths.whatWeDo}
                  color="error"
                  variant="contained"
                  size="large"
                  sx={{ fontFamily: banglaFont }}
                >
                  {t('whatWeDo')}
                </Button>

                <Button
                  fullWidth
                  component={RouterLink}
                  href={paths.donate}
                  color="primary"
                  variant="contained"
                  size="large"
                  sx={{ fontFamily: banglaFont }}
                >
                  {t('donate')}
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src="/assets/logo/logo.svg"
              height={600}
              width={600}
              priority
              alt="Deepayan Logo"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
