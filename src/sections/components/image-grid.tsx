'use client';

import type { StaticImageData } from 'next/image';

import Image from 'next/image';

import { Box, Grid, styled } from '@mui/material';

import { stylesMode } from 'src/theme/styles';

// Optional: Styled component for the gradient background
const GradientSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to right, 
    rgba(59, 130, 246, 0.5),
    rgba(139, 92, 246, 0.5),
    rgba(236, 72, 153, 0.5)
  )`,
  [stylesMode.dark]: {
    background: `linear-gradient(to right, 
      rgba(59, 130, 246, 0.65),
      rgba(139, 92, 246, 0.65),
      rgba(236, 72, 153, 0.65)
    )`,
  },
  backgroundBlendMode: 'overlay',
  padding: theme.spacing(8, 4),
}));

export function ImageGrid({ images }: { images: StaticImageData[] | string[] }) {
  return (
    <GradientSection>
      <Box sx={{ mx: 'auto', maxWidth: 'lg' }}>
        <Box sx={{ py: 6 }}>
          <Grid justifyContent="center" container spacing={4}>
            {images.map((image, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    aspectRatio: '4 / 3',
                    overflow: 'hidden',
                    borderRadius: '8px',
                  }}
                >
                  <Image
                    src={image}
                    alt={typeof image === 'string' ? image : image.src || ''}
                    width={400}
                    height={300}
                    placeholder="blur"
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </GradientSection>
  );
}
