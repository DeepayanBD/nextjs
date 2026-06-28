'use client';

import type { StaticImageData } from 'next/image';
import type { Theme } from '@mui/material/styles';

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
  const transition = (theme: Theme) =>
    theme.transitions.create(['transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.complex,
    });
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
                    '& img': {
                      transition
                    },
                    '&:hover img': {
                      transform: 'scale(1.06)'
                    }
                  }}
                >
                  <Image
                    src={image}
                    alt={typeof image === 'string' ? image : image.src || ''}
                    width={400}
                    height={300}
                    placeholder="blur"
                    sizes="(max-width: 768px) 384px, 256px"
                    style={{
                      objectFit: 'cover',
                      maxWidth: '100%',
                      height: 'auto',
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
