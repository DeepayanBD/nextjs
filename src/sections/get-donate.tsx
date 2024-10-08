'use client';

import bgImage from '@/public/assets/uploads/WhatsApp-Image-2022-03-29-at-10.26.32-AM.webp';

import { Box, Button, styled, Typography } from '@mui/material';

import { RouterLink } from 'src/routes/components';

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
        <SectionTitle title="অনুদান গ্রহণ" />

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
            একটি সুবিধাবঞ্চিত শিশুর জীবনের মোড় ঘুরিয়ে দিতে আমাদের সহায়তা করুন
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
            আপনার অনুদান পৌঁছে যাবে সুবিধাবঞ্চিত শিশু ও মানুষদের সাহায্যে। দারিদ্র ও ক্ষুধামুক্ত
            একটি বাংলাদেশ গড়ার এই লক্ষযাত্রায় আপনাকে স্বাগতম।
          </Typography>
          <Button
            component={RouterLink}
            href="/donate"
            variant="contained"
            fullWidth
            sx={{
              px: 8,
              py: 2,
              width: { xs: '100%', md: 'auto' },
            }}
          >
            Donate
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
