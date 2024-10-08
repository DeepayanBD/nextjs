'use client'

import Image from "next/image";
import banner from "@/public/assets/uploads/banner-02.jpg";
import sideImage from "@/public/assets/uploads/WhatsApp-Image-2022-03-29-at-11.19.24-AM-1024x768.jpeg";

import { Box, Grid, Container, Typography } from '@mui/material';

import { banglaFont } from "src/theme/core";

import { SectionTitle } from "src/sections/components/section-title";

export function HomeVision() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 10 },
      }}
    >
      <Image
        src={banner}
        loading="lazy"
        height={1000}
        width={1000}
        alt="Photo by Fakurian Design"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          opacity: 0.5,
          filter: 'blur(8px)', // Use filter for blur effect
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(37, 99, 235, 0.5) 10%, rgba(128, 0, 128, 0.5) 30%, rgba(255, 105, 180, 0.5) 90%)',
          opacity: 0.55,
          mixBlendMode: 'normal',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <SectionTitle className="font-bangla" title="আমাদের লক্ষ্য" />

        <Grid container spacing={6} sx={{ py: 4 }}>
          <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: banglaFont }}>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.primary', fontFamily: banglaFont }}>
              <strong>“ক্ষুধার রাজ্যে পৃথিবী গদ্যময়, পূর্ণিমা চাঁদ যেন ঝলসানো রুটি”</strong> – সুকান্ত ভট্টাচার্য
              এই লাইনটির মাধ্যমে কী বোঝাতে চেয়েছেন? তিঁনি বোঝাতে চেয়েছেন, একজন ক্ষুধার্ত মানুষের কাছে পার্থিব জীবনের সৌন্দর্য মূল্যহীন। একজন মানুষ এর স্বাভাবিকভাবে বাঁচার জন্য তাকে তার মৌলিক অধিকারসমূহ প্রদান করা ছাড়া কোনো বিকল্প নেই।
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.primary', fontFamily: banglaFont }}>
              আমরা বিশ্বাস করি প্রতিটা মানুষ তাদের মৌলিক অধিকার নিয়ে বাঁচার অধিকার রাখে, বাংলাদেশ এর ২০.৫ শতাংশ মানুষ যারা দারিদ্রসীমার নিচে বসবাস করেন তাদের জীবনযাত্রার মান উন্নয়ন ও জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান এর সেই ক্ষুধামুক্ত সোনার বাংলা গড়ার দৃঢ় প্রত্যয় নিয়ে আমাদের ফাউন্ডেশন এর যাত্রা শুরু হয় ২০১৭ সাল থেকে।
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.primary', fontFamily: banglaFont }}>
              আমাদের এই ক্ষুদ্র প্রয়াসে আপনাদের আগ্রহ ও সহযোগিতা একান্ত কাম্য। স্বপ্নের সেই সোনার বাংলা গড়ার যাত্রায় আপনার অপেক্ষায় আমরা।
            </Typography>
          </Grid>

          <Grid item xs={12} md={7} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              style={{ borderRadius: '8px' }} // Add border-radius inline for MUI styling
              height={500}
              width={700}
              src={sideImage}
              alt="Side Image"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
