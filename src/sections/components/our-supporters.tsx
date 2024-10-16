'use client';

import Image from 'next/image';
import logoIqra from '@/public/assets/logo/supporters/logo-iqra.svg';
import logoDurrbar from '@/public/assets/logo/supporters/logo-durrbar.svg';
import logoSpotify from '@/public/assets/logo/supporters/logo-spotify.svg';
import logoWoderBD from '@/public/assets/logo/supporters/logo-wooder-bd.svg';
import logoSustainableDevelopmentGoals from '@/public/assets/logo/supporters/240px-SustainableDevelopmentGoalsLogo.svg.png';

import { Box, Link, Container, Typography } from '@mui/material';

import { useTranslate } from 'src/locales';
import { banglaFont } from 'src/theme/core';

export function OurSupporters() {
  const { t } = useTranslate('our-supporters');

  return (
    <Box sx={{ py: { xs: 8, lg: 10 }, px: { xs: 4, lg: 8 } }}>
      <Container sx={{ textAlign: 'center', display: 'grid', justifyContent: 'center' }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
            mb: 2,
            fontSize: { xs: '1rem', lg: '1.125rem' },
          }}
        >
          {t('partnerTrust')}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: banglaFont,
            fontWeight: 'bold',
            color: 'text.primary',
            mb: 4,
            fontSize: { xs: '1.75rem', lg: '2.25rem' },
          }}
        >
          {t('today')}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mx: 'auto',
            maxWidth: '60rem',
            mb: 10,
            fontSize: '1.25rem',
            px: { lg: 8 },
          }}
        >
          {t('partnerDescription')}
        </Typography>

        {/* Using CSS Grid for better alignment */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            maxWidth: 'lg',
            mx: 'auto',
          }}
        >
          {/* Left Column */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'rgba(37, 99, 235, 0.3)',
                borderRadius: '1rem',
                px: 3,
                py: 2,
                textAlign: 'center',
              }}
            >
              <Image src={logoWoderBD} alt="Wooder BD Logo" width={240} height={80} />
              <Link
                href="https://wooderbd.com/"
                target="_blank"
                sx={{ my: 1, color: 'inherit', textDecoration: 'none', typography: 'body2' }}
              >
                {t('partner1')}
              </Link>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'rgba(37, 99, 235, 0.3)',
                borderRadius: '1rem',
                px: 3,
                py: 2,
                textAlign: 'center',
              }}
            >
              <Image src={logoIqra} alt="Iqra Foundation Logo" width={240} height={80} />
              <Typography variant="body2" sx={{ my: 1, color: 'inherit' }}>
                {t('partner2')}
              </Typography>
            </Box>
          </Box>

          {/* Middle Column */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              bgcolor: 'rgba(37, 99, 235, 0.3)',
              borderRadius: '1rem',
              px: 5,
              py: 4,
              maxWidth: { xs: '18rem', md: '26rem' },
              textAlign: 'center',
              alignItems: 'center',
            }}
          >
            <Image src={logoSustainableDevelopmentGoals} alt="SDGs Logo" width={128} height={128} />
            <Link
              href="https://sdgs.un.org/"
              target="_blank"
              sx={{ mt: 1.5, color: 'inherit', textDecoration: 'none', typography: 'body2' }}
            >
              sdgs.un.org
            </Link>
            <Typography
              variant="subtitle2"
              sx={{ mt: 1.5, color: 'text.primary', maxWidth: '18rem', mx: 'auto' }}
            >
              {t('partner3')}
            </Typography>
          </Box>

          {/* Right Column */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'rgba(37, 99, 235, 0.3)',
                borderRadius: '1rem',
                px: 3,
                py: 2,
                textAlign: 'center',
              }}
            >
              <Image src={logoSpotify} alt="Spotify Logo" width={240} height={80} />
              <Typography variant="body2" sx={{ my: 1, color: 'inherit' }}>
                {t('partner4')}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'rgba(37, 99, 235, 0.3)',
                borderRadius: '1rem',
                px: 3,
                py: 2,
                textAlign: 'center',
              }}
            >
              <Image src={logoDurrbar} alt="Durrbar Logo" width={240} height={80} />
              <Link
                href="https://www.durrbar.com/"
                target="_blank"
                sx={{ my: 1, color: 'inherit', textDecoration: 'none', typography: 'body2' }}
              >
                {t('partner5')}
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
