'use client';

import Image from 'next/image';
import sideImage from '@/public/assets/uploads/arraggya/side-image.jpeg';

import { Box, Grid, Stack, Container, Typography } from '@mui/material';

import { banglaFont } from 'src/theme/core';

import { GetDonate } from 'src/sections/get-donate';
import { ImageGrid } from 'src/sections/image-grid';
import { OurSupporters } from 'src/sections/our-supporters';
import { SectionTitle } from 'src/sections/components/section-title';
import { DonateButton } from 'src/sections/components/donate-button';

import { arraggyaImages } from '../arraggya';

export default function ArraggyaView() {
  return (
    <>
      <Container
        disableGutters
        sx={{
          minHeight: '100%',
          position: 'relative',
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          py: { xs: 8, md: 10 },
        }}
      >
        <Box sx={{ width: '100%', position: 'relative' }}>
          <SectionTitle title="প্রজেক্ট আরোগ্য" />

          <Grid
            container
            direction={{ xs: 'column-reverse', md: 'row' }}
            spacing={6}
            sx={{ px: 4, py: 8 }}
          >
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
              <Stack spacing={2}>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: banglaFont,
                    color: 'text.primary',
                    textAlign: 'justify',
                  }}
                >
                  সুস্বাস্থ্য ও সুস্থতা মহান সৃষ্টিকর্তার পক্ষ থেকে সমগ্র মানবজাতির উপরে একটি নিয়ামত
                  স্বরূপ। এই নিয়ামত এর অভাব আমরা অক্ষরে অক্ষরে টের পাই যখন আমরা বা আমাদের প্রিয়জন
                  অসুস্থ হয়ে পড়েন। হয়তো অসুস্থ হলে আপনি বা আমি চিকিৎসকের শরণাপন্ন হই, হয়তো ঔষধ সেবন
                  এর পরে মহান আল্লাহ রাব্বুল আল-আমিন এর রহমতে সুস্থতা লাভ করি। কিন্তু কখনো ভেবে
                  দেখেছেন ? এক বেলার আহার জোগাতে যেই অসহায় মানুষদের হিমশিম খেতে হয় তারা কিভাবে বছর
                  এর পর বছর রোগ-ব্যাধি তে ভুগেন। এর ফলাফল হলো একটা অমানবিক মৃত্যু। দীপায়ন এ আমরা
                  বিশ্বাস করি প্রতিটা মানুষ এর রয়েছে সুস্থভাবে বেঁচে থাকার অধিকার। আমাদের রয়েছে
                  প্রশিক্ষিত একদল স্বাস্থকর্মী ও কিছু মহানুভব চিকিৎসকদের একটি দল যারা নিরলসভাবে কাজ
                  করে চলেছেন এই অসহায় মানুষদের মুখে হাসি ফোটাতে। আমাদের ভবিৎষত কর্মপরিকল্পনাতে রয়েছে
                  <strong className="font-bold">&nbsp;দীপায়ন আরোগ্যলয়&nbsp;</strong> যা সম্পূর্ণ
                  বিনামূল্যে চিকিৎসা দিবে একটি বিশাল জনগোষ্ঠীকে, একটি রোগমুক্ত বাংলাদেশ গড়ার এই
                  প্রয়াস এ আপনার অনুদান হাসি ফোটাবে হাজারো অসহায় রোগীর মুখে। সোনার বাংলাদেশ গড়ার দৃঢ়
                  প্রত্যয়ে আপনাকে স্বাগতম।
                </Typography>

                <DonateButton sx={{ width: { xs: '100%', md: '100px' } }} />
              </Stack>
            </Grid>

            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'right' }}>
              <Box
                sx={{
                  maxWidth: '100%',
                  width: { xs: '100%', sm: '384px' },
                  borderRadius: 2,
                }}
              >
                <Image
                  src={sideImage}
                  alt="Project Arraggya"
                  priority
                  placeholder="blur"
                  style={{
                    borderRadius: '8px',
                    height: 'auto',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <ImageGrid images={arraggyaImages} />

      <OurSupporters />

      <GetDonate />
    </>
  );
}
