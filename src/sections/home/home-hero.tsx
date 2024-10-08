'use client';

import Image from 'next/image';

import { styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography } from '@mui/material';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { banglaFont } from 'src/theme/core';
import { varAlpha, bgGradient } from 'src/theme/styles';

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: `200deg, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.8)}, ${varAlpha(theme.vars.palette.success.darkerChannel, 0.7)}, ${varAlpha(theme.vars.palette.primary.darkerChannel, 0.9)}`,
    imgUrl: `/assets/uploads/WhatsApp-Image-2022-03-29-at-11.04.46-AM.jpeg`,
  }),
  width: '100%',
  height: '100vh',
  position: 'relative',
}));

export function HomeHero() {
  return (
    <StyledRoot>
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
                  sx={{ mb: { xs: 4, md: 6 }, color: 'black' }}
                >
                  Because Only Together We Can
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
                  একটি মানবিক পৃথিবীর জন্য
                </Typography>

                <Box sx={{ display: 'flex', gap: 2.5, flexDirection: { xs: 'column', sm: 'row' } }}>
                  <Button
                    fullWidth
                    component={RouterLink}
                    href={paths.whatWeDo}
                    color="error"
                    variant="contained"
                    size="large"
                  >
                    What We Do
                  </Button>

                  <Button
                    fullWidth
                    component={RouterLink}
                    href={paths.donate}
                    color="primary"
                    variant="contained"
                    size="large"
                  >
                    Donate
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
    </StyledRoot>
  );
}
