'use client'


import { Box, Divider, Typography } from "@mui/material";

import { useTranslate } from "src/locales";
import { banglaFont } from "src/theme/core";
import { bgGradient, stylesMode } from "src/theme/styles";

export function HeroOne() {
  const { t } = useTranslate();

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
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          ...bgGradient({
            color: `to right, rgba(236, 72, 153, 0.8), rgba(126, 34, 206, 0.8), rgba(59, 130, 246, 0.8)`,
            imgUrl: `/assets/uploads/WhatsApp-Image-2022-03-29-at-11.04.46-AM.jpeg`,
          }),
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
          {t('forHumaneWorld')}
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
          {t('compassionMessage')}
        </Typography>
      </Box>
    </Box>
  );
}
