import Image from "next/image";

import { Box, Container } from "@mui/material";

import { homeSlider } from "./homeSlider";

export function HomeSlider() {
  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(to top right, rgba(239, 129, 173, 0.7), rgba(176, 126, 237, 0.7), rgba(116, 200, 246, 0.7))',
      }}
    >
      <Container maxWidth="lg">
        <Box
          className="slider"
          sx={{
            display: 'flex',
            overflow: 'hidden',
          }}
        >
          <Box
            className="slide-track"
            sx={{
              display: 'flex',
              animation: 'scroll 20s linear infinite',
            }}
          >
            {homeSlider.map((image, index) => (
              <Box
                key={image.src + index}
                sx={{
                  mx: 1,
                  height: 384,
                  width: 288,
                  borderRadius: 2,
                  border: "2px solid",
                  borderColor: "primary.main",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={image}
                  height={384}
                  width={288}
                  alt={image.src}
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
