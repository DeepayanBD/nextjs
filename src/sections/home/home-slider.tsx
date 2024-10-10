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
                  mx: 1, // Equivalent to Tailwind mx-1 (margin-left, margin-right)
                  height: 384,
                  width: 288,
                  borderRadius: "16px", // Equivalent to rounded-2xl
                  border: "2px solid",
                  borderColor: "primary.main", // Equivalent to border-blue-600
                  overflow: "hidden", // To ensure the image respects the border radius
                }}
              >
                <Image
                  src={image}
                  height={384}
                  width={288}
                  alt={image.src}
                  quality={100}
                  loading="lazy"
                  style={{
                    objectFit: "cover", // Ensures the image fills its container properly
                    height: "100%", // Ensures the image uses the full height of the container
                    width: "100%", // Ensures the image uses the full width of the container
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
