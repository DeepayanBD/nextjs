'use client';

import Image from 'next/image';
import sideLogo from '@/public/assets/logo/deepayan-logo.png';
import bKashLogo from '@/public/assets/logo/donate/bkash.svg';
import nagadLogo from '@/public/assets/logo/donate/nagad.svg';
import bgImage from '@/public/assets/uploads/home-banner-04.jpg';
import sonaliBankLogo from '@/public/assets/logo/donate/sonali-bank.svg';

import { Box, Grid, Container, Typography } from '@mui/material';

import { useTranslate } from 'src/locales';
import { varAlpha } from 'src/theme/styles';
import { banglaFont } from 'src/theme/core';

const methods = [
  {
    name: 'bKash',
    logo: bKashLogo,
    details: '01916916832',
  },
  {
    name: 'Nagad',
    logo: nagadLogo,
    details: '01799015558',
  },
  {
    name: 'Sonali Bank',
    logo: sonaliBankLogo,
    details:
      'Deepayan Foundation \n01 11 50 20 08 08 3 \nCantonment Branch \nRouting - 200261036 \nSWIFT - BSONBDDHCNT',
  },
];

export function DonateView() {
  const { t } = useTranslate();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        py: { xs: 14, sm: 20, lg: 24 },
      }}
    >
      <Image
        src={bgImage}
        priority
        height={1000}
        width={500}
        placeholder="blur"
        alt="Photo by Fakurian Design"
        style={{
          position: 'absolute',
          inset: 0,
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top right, rgba(0, 121, 184, 0.1), rgba(128, 0, 128, 0.3), rgba(255, 20, 147, 0.9))',
          opacity: 0.55,
        }}
      />
      <Box sx={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(18, 24, 32, 0.5)' }} />

      <Container maxWidth="lg">
        <Grid container spacing={8} sx={{ position: 'relative' }}>
          <Grid
            item
            xs={12}
            md={5}
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{ fontWeight: 'bold', color: 'white', mb: 3, fontFamily: banglaFont }}
            >
              {/* Your Donation Can <br /> Change the World */}
              {t('changeTheWorld')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {methods.map(({ name, logo, details }, index) => (
                <Box
                  key={index}
                  sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: varAlpha(theme.vars.palette.primary.mainChannel, 0.4),
                    borderRadius: '1rem',
                    boxShadow: theme.customShadows.error,
                    padding: 2,
                    maxWidth: 'sm',
                    '&:hover': {
                      backgroundColor: varAlpha(theme.vars.palette.primary.mainChannel, 0.5),
                    },
                  })}
                >
                  <Box sx={{ flexShrink: 1, width: { xs: '6rem', md: '9rem' } }}>
                    <Image
                      src={logo}
                      alt={name}
                      layout="responsive"
                      width={144} // Use relative dimensions (multiplied 24px by 6)
                      height={144} // Use the same ratio as width (auto behavior)
                      style={{ objectFit: 'contain' }} // Ensure it scales properly
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: 'medium', color: 'black' }}
                    >
                      {name}
                    </Typography>
                    {details.split('\n').map((line, lineIndex) => (
                      <Typography key={lineIndex} variant="subtitle2" sx={{ color: 'white' }}>
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={7} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={(theme) => ({ boxShadow: theme.customShadows.error, borderRadius: '1rem' })}>
              <Image
                quality={100}
                src={sideLogo}
                alt="Deepayan Logo"
                style={{ borderRadius: '1rem', width: '100%' }} // Adjust width as needed
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
