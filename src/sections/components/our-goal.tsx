'use client';

import Image from 'next/image';
import sideLogo from '@/public/assets/logo/deepayan-logo.png';

import { Box, Stack, Container, Typography } from '@mui/material';

import { useTranslate } from 'src/locales';
import { banglaFont } from 'src/theme/core';
import { bgGradient } from 'src/theme/styles';

import { Markdown } from 'src/components/markdown';

import { DonateButton } from 'src/sections/components/donate-button';
import { SectionTitle } from 'src/sections/components/section-title';

export function OurGoal() {
  const { t } = useTranslate('our-goal');

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        py: { xs: 8, md: 14 },
        boxShadow: 3,
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
            color: `to top right, rgba(236, 72, 153, 0.75) 20%, rgba(59, 130, 246, 0.65) 40%, rgba(139, 92, 246, 0.65) 80%, rgba(236, 72, 153, 0.75) 90%`,
          }),
        }}
      />

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <SectionTitle title={t('sectionTitle')} />

        <Container
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            gap: 8,
            maxWidth: 'xl',
            pt: 6,
          }}
        >
          <Box sx={{ flex: 1, maxWidth: 'lg', display: 'flex', alignItems: 'center' }}>
            <Stack spacing={4}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', fontFamily: banglaFont, color: 'error.main' }}
              >
                {t('goalDescription')}
              </Typography>

              <Markdown content={t('quote')} fontFamily={banglaFont} />

              <Typography variant="body1" fontFamily={banglaFont}>
                {t('belief')}
              </Typography>

              <DonateButton sx={{ width: { xs: '100%', md: '100px' } }} />
            </Stack>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src={sideLogo}
              alt="Deepayan Logo"
              quality={100}
              style={{
                borderRadius: '8px',
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Container>
      </Container>
    </Box>
  );
}
