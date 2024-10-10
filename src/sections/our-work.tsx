'use client'

import { Box, Grid, Container, Typography } from "@mui/material";

import { useTranslate } from "src/locales";
import { banglaFont } from "src/theme/core";

import { SectionTitle } from "src/sections/components/section-title";

interface ReviewCardPropsType {
  id: string;
  heading: string;
  details: string;
}

export function CardReview({ id, heading, details }: ReviewCardPropsType) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: 3,
        px: 2,
        maxWidth: '100%',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontWeight: 'bold',
          fontFamily: banglaFont,
          mb: 1,
          mt: 1,
          color: 'text.primary',
        }}
      >
        {id}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontFamily: banglaFont,
          fontWeight: 'bold',
          color: 'text.primary',
        }}
      >
        {heading}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mt: 2,
          fontFamily: banglaFont,
          color: 'text.primary',
        }}
      >
        {details}
      </Typography>
    </Box>
  );
}

export function OurWork() {
  const { t } = useTranslate('our-work');

  const CONTENTS = [
    {
      id: t("id01"),
      heading: t("heading01"),
      details: t("details01"),
    },
    {
      id: t("id02"),
      heading: t("heading02"),
      details: t("details02"),
    },
    {
      id: t("id03"),
      heading: t("heading03"),
      details: t("details03"),
    },
    {
      id: t("id04"),
      heading: t("heading04"),
      details: t("details04"),
    },
    {
      id: t("id05"),
      heading: t("heading05"),
      details: t("details05"),
    },
    {
      id: t("id06"),
      heading: t("heading06"),
      details: t("details06"),
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        px: 4,
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle title={t('ourActivities')} />
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {CONTENTS.map(({ id, heading, details }) => (
            <Grid item xs={12} lg={4} key={id}>
              <CardReview id={id} heading={heading} details={details} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
