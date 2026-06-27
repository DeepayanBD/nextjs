'use client';

import bgImage from '@/public/assets/uploads/community-food-relief-for-families.webp';

import { Box, Button, styled, Typography } from '@mui/material';

import { RouterLink } from 'src/routes/components';

import { useTranslate } from 'src/locales';
import { banglaFont } from 'src/theme/core';

import { SectionTitle } from 'src/sections/components/section-title';

const GradientOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(to top right,
    rgba(59, 130, 246, 0.85) 10%,  /* from blue-500/85 */
    rgba(139, 92, 246, 0.85) 30%,  /* via purple-500/85 */
    rgba(236, 72, 153, 0.85) 90%   /* to pink-500/85 */
  )`,
  mixBlendMode: 'normal',
});

export function GetDonate() {
  const { t } = useTranslate('donation');
  return (
    <Box
      component="section"
      sx={{
        fontFamily: banglaFont, // Custom font
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        py: { xs: 8, md: 10 }, // Responsive padding
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        overflow: 'hidden',
      }}
    >
      {/* Gradient Overlay */}
      <GradientOverlay />

      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <SectionTitle title={t('donation')} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: { xs: 4, md: 6 },
            gap: 6,
            maxWidth: '640px',
            px: 4,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: banglaFont,
              fontSize: { xs: '1.5rem', sm: '3rem', md: '1.5rem' },
              fontWeight: 'medium',
              textAlign: 'center',
              color: 'text.primary',
            }}
          >
            {t('donationMessage')}
          </Typography>

          <Typography
            sx={{
              fontFamily: banglaFont,
              textAlign: 'center',
              color: 'text.primary',
              fontSize: { xs: '1rem', sm: '1.25rem' },
              fontWeight: 'medium',
            }}
          >
            {t('donationDetails')}
          </Typography>
          <Button
            component={RouterLink}
            href="/donate"
            variant="contained"
            fullWidth
            sx={{
              px: 8,
              py: 2,
              width: { xs: '100%', md: 'auto', fontFamily: banglaFont },
            }}
          >
            {t('donate')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
