'use client';

import Image from 'next/image';
import sideLogo from '@/public/assets/logo/deepayan-logo.png';

import { Box, Stack, Container, Typography } from '@mui/material';

import { banglaFont } from 'src/theme/core';
import { bgGradient } from 'src/theme/styles';

import { DonateButton } from 'src/sections/components/donate-button';
import { SectionTitle } from 'src/sections/components/section-title';

export function OurGoal() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        py: { xs: 8, md: 14 },
        boxShadow: 3,
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
            color: `to top right, rgba(236, 72, 153, 0.75) 20%, rgba(59, 130, 246, 0.65) 40%, rgba(139, 92, 246, 0.65) 80%, rgba(236, 72, 153, 0.75) 90%`,
          }),
        }}
      />

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <SectionTitle title="আমাদের লক্ষ্য" />

        <Container
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            gap: 8,
            maxWidth: 'xl',
            pt: 6,
          }}
        >
          <Box sx={{ flex: 1, maxWidth: 'lg', display: 'flex', alignItems: 'center' }}>
            <Stack spacing={4}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', fontFamily: banglaFont, color: 'error.dark' }}
              >
                একটি দারিদ্র ও ক্ষুধামুক্ত দেশ, যেখানে কোনো মানুষ অভুক্ত অবস্থায় রাস্তায় ঘুমাবে না
              </Typography>

              <Typography variant="body1" fontFamily={banglaFont}>
                <strong>“ক্ষুধার রাজ্যে পৃথিবী গদ্যময়, পূর্ণিমা চাঁদ যেন ঝলসানো রুটি”</strong>{' '}
                &nbsp; – &nbsp; সুকান্ত ভট্টাচার্য এই লাইনটির মাধ্যমে কী বোঝাতে চেয়েছেন? তিঁনি
                বোঝাতে চেয়েছেন, একজন ক্ষুধার্ত মানুষের কাছে পার্থিব জীবনের সৌন্দর্য মূল্যহীন। একজন
                মানুষ এর স্বাভাবিকভাবে বাঁচার জন্য তাকে তার মৌলিক অধিকারসমূহ প্রদান করা ছাড়া কোনো
                বিকল্প নেই।
              </Typography>

              <Typography variant="body1" fontFamily={banglaFont}>
                আমরা বিশ্বাস করি প্রতিটা মানুষ তাদের মৌলিক অধিকার নিয়ে বাঁচার অধিকার রাখে, বাংলাদেশ
                এর ২০.৫ শতাংশ মানুষ যারা দারিদ্রসীমার নিচে বসবাস করেন তাদের জীবনযাত্রার মান উন্নয়ন ও
                জাতির জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান এর সেই ক্ষুধামুক্ত সোনার বাংলা গড়ার দৃঢ়
                প্রত্যয় নিয়ে আমাদের ফাউন্ডেশন এর যাত্রা শুরু হয় ২০১৭ সাল থেকে, আমাদের এই ক্ষুদ্র
                প্রয়াসে আপনাদের আগ্রহ ও সহযোগিতা একান্ত কাম্য। স্বপ্নের সেই সোনার বাংলা গড়ার যাত্রায়
                আপনার অপেক্ষায় আমরা।
              </Typography>

              <DonateButton sx={{ width: { xs: '100%', md: '100px' } }} />
            </Stack>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src={sideLogo}
              alt="Deepayan Logo"
              quality={100}
              style={{
                borderRadius: '8px',
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Container>
      </Container>
    </Box>
  );
}
