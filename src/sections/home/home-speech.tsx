'use client';

import { Box, Stack, Container, Typography } from '@mui/material';

import { useTranslate } from 'src/locales';
import { banglaFont } from 'src/theme/core';
import { bgGradient } from 'src/theme/styles';

import { SectionTitle } from 'src/sections/components/section-title';

export function HomeSpeech() {
  const { t } = useTranslate('home/speech');
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
            imgUrl: `/assets/uploads/home-banner-04.jpg`,
          }),
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 2, maxWidth: 'lg', px: { xs: 2, md: 4 } }}>
        <SectionTitle title={t('sectionTitle')} />

        <Stack
          spacing={14}
          direction={{ xs: 'column', md: 'row' }}
          sx={{ mx: 2, my: { xs: 8, md: 16 } }}
        >
          <Stack sx={{ position: 'relative', width: 1 }}>
            {/* Top-left Quote Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
              width={40}
              height={40}
              style={{
                position: 'absolute',
                top: '-30px', // Move icon closer to the text
                color: '#FFBF00', // Amber color for the icon
              }}
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>

            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', color: 'text.primary', fontFamily: banglaFont, my: 2 }}
            >
              {t('fewWordsText')}
            </Typography>

            {/* Bottom-right Quote Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
              width={40}
              height={40}
              style={{
                position: 'absolute',
                bottom: 0, // Move icon closer to the text
                right: 0,
                color: '#FFBF00', // Amber color for the icon
              }}
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
          </Stack>

          <Stack sx={{ position: 'relative', width: 1 }}>
            {/* Top-left Quote Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
              width={40}
              height={40}
              style={{
                position: 'absolute',
                top: '-30px', // Move icon closer to the text
                color: '#FFBF00', // Amber color for the icon
              }}
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>

            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', color: 'text.primary', fontFamily: banglaFont, my: 2 }}
            >
              {t('hungerFreeDream')}
            </Typography>

            {/* Bottom-right Quote Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
              width={40}
              height={40}
              style={{
                position: 'absolute',
                bottom: 0, // Move icon closer to the text
                right: 0,
                color: '#FFBF00', // Amber color for the icon
              }}
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
