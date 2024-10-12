'use client';

import Image from 'next/image';
import sideImage from '@/public/assets/uploads/WhatsApp-Image-2022-03-29-at-11.19.24-AM-1024x768.jpeg';

import { Box, Grid, Container, Typography } from '@mui/material';

import { useTranslate } from 'src/locales';
import { banglaFont } from 'src/theme/core';
import { bgGradient } from 'src/theme/styles';

import { Markdown } from 'src/components/markdown';

import { SectionTitle } from 'src/sections/components/section-title';

export function HomeVision() {
  const { t } = useTranslate('home/vision');

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          ...bgGradient({
            color: `to top right, rgba(59, 130, 246, 0.75) 10%, rgba(139, 92, 246, 0.75) 30%, rgba(236, 72, 153, 0.75) 90%`,
          }),
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <SectionTitle className="font-bangla" title={t('sectionTitle')} />

        <Grid container spacing={6} sx={{ py: 4 }}>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              fontFamily: banglaFont,
            }}
          >
            <Markdown
              content={t('quote')}
              sx={{ mb: 2, color: 'text.primary', fontFamily: banglaFont }}
            />
            <Typography
              variant="body1"
              sx={{ mb: 2, color: 'text.primary', fontFamily: banglaFont }}
            >
              {t('belief')}
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, color: 'text.primary', fontFamily: banglaFont }}
            >
              {t('request')}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              aspectRatio: '137/103',
            }}
          >
            <Image
              style={{ borderRadius: '8px', aspectRatio: '137/103' }} // Add border-radius inline for MUI styling
              height={563}
              width={750}
              src={sideImage}
              alt="Side Image"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
