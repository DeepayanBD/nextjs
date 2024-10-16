'use client';

import type { StaticImageData } from 'next/image';

import Image from 'next/image';

import { Box, Grid, Stack, Container } from '@mui/material';

import { banglaFont } from 'src/theme/core';

import { Markdown } from 'src/components/markdown';

import { GetDonate } from 'src/sections/get-donate';
import { ImageGrid } from 'src/sections/image-grid';
import { DonateButton } from 'src/sections/components/donate-button';
import { SectionTitle } from 'src/sections/components/section-title';

type CommnProps = {
    images: StaticImageData[] | string[];
    sectiontitle: string;
    sectionDescription: string;
    sideImage: StaticImageData | string;
};

export function CommonView({ images, sectionDescription, sideImage, sectiontitle }: CommnProps) {
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
                    <SectionTitle title={sectiontitle} />

                    <Grid
                        container
                        direction={{ xs: 'column-reverse', md: 'row' }}
                        spacing={4}
                        sx={{ px: 4, py: 8 }}
                    >
                        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Stack spacing={2}>
                                <Markdown
                                    content={sectionDescription}
                                    sx={{
                                        fontFamily: banglaFont,
                                        color: 'text.primary',
                                        textAlign: 'justify',
                                    }}
                                />
                                <DonateButton sx={{ width: { xs: '100%', md: '100px' } }} />
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'right' }}>
                            <Box
                                sx={{
                                    maxWidth: '100%',
                                    width: { xs: '100%', sm: '500px' },
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

            <ImageGrid images={images} />

            <GetDonate />
        </>
    );
}
