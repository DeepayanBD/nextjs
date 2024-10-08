'use client';

import Image from 'next/image';
import logoIqra from '@/public/assets/logo/supporters/logo-iqra.svg';
import logoDurrbar from '@/public/assets/logo/supporters/logo-durrbar.svg';
import logoSpotify from '@/public/assets/logo/supporters/logo-spotify.svg';
import logoWoderBD from '@/public/assets/logo/supporters/logo-wooder-bd.svg';
import logoSustainableDevelopmentGoals from '@/public/assets/logo/supporters/240px-SustainableDevelopmentGoalsLogo.svg.png';

import { Box, Link, Container, Typography } from '@mui/material';

import { banglaFont } from 'src/theme/core';

export function OurSupporters() {
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
          More than 50+ foundations trust us
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
          যাদের সহযোগিতায় আজকের দীপায়ন
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
          {`From grassroots movements to world-renowned organizations, our partners span a diverse range of causes, each with distinct challenges we've expertly navigated to drive meaningful impact.`}
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
                Wooder BD
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
                Iqra Foundation
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
              {`“Every year, the UN Secretary General presents an annual SDG Progress report, which is developed in cooperation with the UN System, and based on the global indicator framework and data produced by national statistical systems and information collected at the regional level."`}
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
                Spotify
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
                Durrbar
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
