'use client'

import type { StaticImageData } from "next/image";

import Image from "next/image";

import { Box, Grid, Container, Typography } from "@mui/material";

import { SectionTitle } from "src/sections/components/section-title";

import { ourWorkPart } from "./ourWorkPart";

interface ReviewCardPropsType {
  heading: string;
  image: StaticImageData | string;
  details: string;
}

export function CardReview({ heading, image, details }: ReviewCardPropsType) {
  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        display: "flex",
        flexDirection: "column",
        aspectRatio: "3/4",
        overflow: "hidden",
        borderRadius: 2,
        boxShadow: theme.customShadows.card,
        "&:hover img": {
          transform: "scale(1.1)",
          transition: "transform 0.5s",
        },
      })}
    >
      <Image
        src={image}
        alt={heading}
        height={400}
        width={300}
        placeholder="blur"
        style={{
          position: "absolute",
          inset: 0,
          height: "100%",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
          transition: "transform 0.5s",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          zIndex: 1,
        }}
      >
        <Typography
          variant="body1"
          component="span"
          sx={{
            color: "white",
            fontWeight: "bold",
            lineHeight: 1.2,
          }}
        >
          {heading}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "white",
            mt: 1,
            fontWeight: "normal",
          }}
        >
          {details}
        </Typography>
      </Box>
    </Box>
  );
}

export function OurWorkPart() {
  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(to top right, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.5))",
        backgroundBlendMode: "overlay",
      }}
    >
      <Container>
        <SectionTitle
          title="আমাদের কার্যক্রমের একাংশ"
        />
        <Container sx={{ mt: 10 }}>
          <Grid container spacing={4}>
            {ourWorkPart.map(({ heading, image, details }, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <CardReview
                  heading={heading}
                  image={image}
                  details={details} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}
