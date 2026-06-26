'use client';

import type { StaticImageData } from 'next/image';
import type { SectionTitleProps } from 'src/sections/components/section-title';
import type { CustomBreadcrumbsProps } from 'src/components/custom-breadcrumbs';

import Image from 'next/image';

import { Box, Grid, Stack, Container } from '@mui/material';

import { banglaFont } from 'src/theme/core';

import { Markdown } from 'src/components/markdown';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ImageGrid } from 'src/sections/components/image-grid';
import { GetDonate } from 'src/sections/components/get-donate';
import { DonateButton } from 'src/sections/components/donate-button';
import { SectionTitle } from 'src/sections/components/section-title';
import { ComponentHero } from 'src/sections/components/component-hero';

type CommnProps = {
    sectionDescription: string;
    sideImage: { src: StaticImageData | string, alt: string };

    slotProps?: {
        imageGrid?: { images: StaticImageData[] | string[]; }
        breadcrumbs?: CustomBreadcrumbsProps;
        sectiontitle?: SectionTitleProps;
    };
};

export function CommonView({
    sectionDescription,
    sideImage,
    slotProps
}: CommnProps) {
    return (
        <>
            {!!slotProps?.breadcrumbs && (
                <ComponentHero>
                    <CustomBreadcrumbs
                        {...slotProps.breadcrumbs}
                    />
                </ComponentHero>
            )}

            <Container
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
                    {!!slotProps?.sectiontitle && <SectionTitle {...slotProps.sectiontitle} />}

                    <Grid
                        container
                        direction={{ xs: 'column-reverse', md: 'row' }}
                        spacing={4}
                        sx={{ py: 8 }}
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
                                    src={sideImage.src}
                                    alt={sideImage.alt}
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

            {!!slotProps?.imageGrid && <ImageGrid {...slotProps?.imageGrid} />}

            <GetDonate />
        </>
    );
}
