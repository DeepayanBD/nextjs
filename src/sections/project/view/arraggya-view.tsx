'use client';

import Image from 'next/image';
import sideImage from '@/public/assets/uploads/arraggya/side-image.jpeg';

import { Box, Grid, Stack, Container, Typography } from '@mui/material';

import { useTranslate } from 'src/locales';
import { banglaFont } from 'src/theme/core';

import { Markdown } from 'src/components/markdown';

import { GetDonate } from 'src/sections/get-donate';
import { ImageGrid } from 'src/sections/image-grid';
import { OurSupporters } from 'src/sections/our-supporters';
import { SectionTitle } from 'src/sections/components/section-title';
import { DonateButton } from 'src/sections/components/donate-button';

import { arraggyaImages } from '../arraggya';

export default function ArraggyaView() {
  const { t } = useTranslate('project');

  return (
    <>
      <Container
        disableGutters
        sx={{
          minHeight: '100%',
          position: 'relative',
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          py: { xs: 8, md: 10 },
        }}
      >
        <Box sx={{ width: '100%', position: 'relative' }}>
          <SectionTitle title={t('arraggyaTittle')} />

          <Grid
            container
            direction={{ xs: 'column-reverse', md: 'row' }}
            spacing={6}
            sx={{ px: 4, py: 8 }}
          >
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
              <Stack spacing={2}>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: banglaFont,
                    color: 'text.primary',
                    textAlign: 'justify',
                  }}
                >
                  <Markdown content={t('arraggyaDescription')} />
                </Typography>

                <DonateButton sx={{ width: { xs: '100%', md: '100px' } }} />
              </Stack>
            </Grid>

            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'right' }}>
              <Box
                sx={{
                  maxWidth: '100%',
                  width: { xs: '100%', sm: '384px' },
                  borderRadius: 2,
                }}
              >
                <Image
                  src={sideImage}
                  alt="Project Arraggya"
                  priority
                  placeholder="blur"
                  style={{
                    borderRadius: '8px',
                    height: 'auto',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <ImageGrid images={arraggyaImages} />

      <OurSupporters />

      <GetDonate />
    </>
  );
}
