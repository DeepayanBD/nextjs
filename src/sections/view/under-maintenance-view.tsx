'use client'

import Image from "next/image";
import sideImage from "@/public/assets/svg/undraw_co-working_re_w93t.svg";

import { Box, Grid, Stack, Container, Typography } from "@mui/material";

import { banglaFont } from "src/theme/core";

import { GetDonate } from "src/sections/get-donate";
import { DonateButton } from "src/sections/components/donate-button";
import { SectionTitle } from "src/sections/components/section-title";

export function UnderMaintenanceView() {
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
          <SectionTitle title="Under Maintenance" />

          <Grid
            container
            spacing={4}
            sx={{
              px: 4,
              py: { xs: 2, md: 8 }
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={7} >
              <Box sx={{ p: 0 }}>
                <Image
                  src={sideImage}
                  alt="Under Maintenance"
                  priority
                  height={500}
                  width={500}
                  style={{
                    borderRadius: "8px",
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={5} >
              <Stack spacing={3} >
                <Typography
                  component="span"
                  sx={{
                    fontFamily: banglaFont,
                    color: "text.primary",
                  }}
                >
                  {`As a vital arm of our nonprofit NGO, the ongoing maintenance
                  of our projects stands as a testament to our commitment to
                  sustainable impact. With a dedicated team of volunteers and
                  professionals, we ensure that every aspect of our initiatives
                  remains finely tuned and responsive to the evolving needs of
                  our communities. Whether it's maintaining infrastructure for
                  education, healthcare, or environmental conservation, we
                  approach each task with diligence and care. Regular
                  assessments, repairs, and upgrades not only guarantee the
                  longevity of our projects but also reinforce our promise to
                  serve with excellence and integrity. Through this ongoing
                  maintenance, we uphold the trust and support of our
                  stakeholders, fostering a legacy of positive change that
                  endures for generations to come.`}
                </Typography>

                <DonateButton sx={{ width: { xs: '100%', md: '100px' } }} />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <GetDonate />
    </>
  );
}
