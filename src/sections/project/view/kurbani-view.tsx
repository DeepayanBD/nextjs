'use client'

import Image from "next/image";
import sideImage from "@/public/assets/uploads/kurbani/bannerboy-1000x1024.jpg";

import { Box, Grid, Stack, styled, Container, Typography } from "@mui/material";

import { useTranslate } from "src/locales";

import { GetDonate } from "src/sections/get-donate";
import { ImageGrid } from "src/sections/image-grid";
import { DonateButton } from "src/sections/components/donate-button";
import { SectionTitle } from "src/sections/components/section-title";

import { kurbaniImages } from "../kurbani";

const StyledImage = styled(Image)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  aspectRatio: '1/1'
}));

export default function KurbaniView() {
  const { t } = useTranslate('project')
  return (
    <>
      <Container
        disableGutters
        sx={{
          minHeight: "100%",
          position: "relative",
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          py: { xs: 8, md: 10 },
        }}
      >
        <Box sx={{ position: "relative", width: "100%" }}>
          <SectionTitle title={t('qurbaniTitle')} />

          <Grid
            container
            spacing={4}
            sx={{
              px: 4,
              py: { xs: 4, md: 8 }
            }}
          >
            <Grid item xs={12} md={7} >
              <Box sx={{ p: 2 }}>
                <StyledImage
                  src={sideImage}
                  alt="Project Kurbani"
                  priority
                  height={500}
                  width={500}
                  placeholder="blur"
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={5} sx={{ display: "flex", alignItems: "center" }}>
              <Stack spacing={2} >
                <Typography component="span" sx={{ color: 'text.primary' }}>
                  {t('qurbaniDescription')}
                </Typography>

                <DonateButton sx={{ width: { xs: '100%', sm: '120px' }, display: 'flex' }} />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <ImageGrid images={kurbaniImages} />

      <GetDonate />
    </>
  );
}
