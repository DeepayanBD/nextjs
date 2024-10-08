'use client'

import Image from "next/image";
import bgImage from "@/public/assets/uploads/WhatsApp-Image-2022-03-29-at-11.04.46-AM.jpeg";

import { Box, Divider, Typography } from "@mui/material";

import { banglaFont } from "src/theme/core";
import { bgGradient, stylesMode } from "src/theme/styles";

export function HeroTwo() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 15 },
        overflow: 'hidden',
      }}
    >
      <Image
        src={bgImage}
        alt="Photo by Fakurian Design"
        layout="fill" // Fill the Box
        objectFit="cover" // Cover the entire area
        objectPosition="center" // Center the image
        placeholder="blur" // Use blur placeholder if needed
        priority // Load this image with priority
      />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(236, 72, 153, 0.8), rgba(126, 34, 206, 0.8), rgba(59, 130, 246, 0.8))',
          mixBlendMode: 'multiply', // Blend mode
          opacity: 0.95,
        }}
      />

      <Box sx={{ position: 'relative', textAlign: 'start', p: 4, mx: { xs: 4, md: 14 } }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: banglaFont,
            fontWeight: 'normal',
            fontSize: { xs: '1rem', sm: '2rem' },
            color: 'white',
          }}
        >
          একটি দারিদ্রমুক্ত দেশ গড়তে
        </Typography>

        <Divider
          sx={(theme) => ({
            width: '33%',
            height: 8,
            my: 4,
            border: 0,
            ...bgGradient({
              color: `90deg, transparent 0%, ${theme.vars.palette.primary.main} 50%, transparent 100%`,
            }),
            [stylesMode.dark]: {
              ...bgGradient({
                color: `90deg, transparent 0%, ${theme.vars.palette.error.dark} 50%, transparent 100%`,
              }),
            },
          })}
        />

        <Typography
          variant="h3"
          sx={{
            mb: 8,
            fontFamily: banglaFont,
            fontSize: { xs: '1.25rem', sm: '2rem' },
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          সোনার বাংলা পেতে চাই, সোনার মানুষ গড়বো তাই
        </Typography>
      </Box>
    </Box>
  );
}
