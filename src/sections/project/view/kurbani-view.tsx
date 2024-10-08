'use client'

import Image from "next/image";
import sideImage from "@/public/assets/uploads/kurbani/bannerboy-1000x1024.jpg";

import { Box, Grid, Stack, styled, Container, Typography } from "@mui/material";

import { banglaFont } from "src/theme/core";

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
          <SectionTitle title="প্রজেক্ট কুরবানি" />

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
                <Typography component="span" sx={{ fontFamily: banglaFont, color: 'text.primary' }}>
                  কুরবানী, মহান আল্লাহর সন্তুষ্টি লাভের উদ্দেশে সামর্থবান মুসলিম
                  বান্দাহর উপরে অসহায় বান্দার হক , কিন্তু কালের বিবর্তনে এই
                  উৎসবটি নতুন ফ্রিজ কেনা আর গোস্ত খাবার উৎসবে পরিণত হয়েছে
                  (আস্তাগফিরুল্লাহ) । এই চরম উর্ধগতির বাজারে পশু ক্রয়ের ক্ষমতা
                  হারিয়েছে কয়েকলক্ষ পরিবার। এই পবিত্র উৎসবের দিনেও যেন কোনো
                  মধ্যবিত্ত বা অসহায় মানুষের বাসায় অবুঝ শিশুর অবুঝ প্রশ্নে কোনো
                  পিতার হৃদয়ে রক্তখরন না হয়, সেইজন্য আমাদের এই ছোট্ট উদ্যোগ। এই
                  উদ্যোগে সামিল হতে পারেন আপনিও । ক্ষুধামুক্ত বাংলাদেশ গোড়ার
                  লক্ষে যুক্ত হন আমাদের সাথে। আপনার একটি অনুদান হাসি ফোটাবে
                  হাজারো অসহায় পরিবার এর মুখে।
                </Typography>

                <DonateButton sx={{ width: { xs: '100%', sm: '100px' } }} />
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
