'use client';

import { Container } from "@mui/material";

import { _mockProjects } from "src/_mock/_projects";

import { CustomBreadcrumbs } from "src/components/custom-breadcrumbs";

import { GetDonate } from "src/sections/components/get-donate";
import { CommonItems } from "src/sections/components/common-items";
import { ComponentHero } from "src/sections/components/component-hero";

export function ProjectView() {

    return (
        <>
            <ComponentHero>
                <CustomBreadcrumbs
                    heading='Projects'
                    links={[
                        {
                            name: 'Home',
                            href: '/',
                        },
                        {
                            name: 'Projects'
                        },
                    ]}
                />
            </ComponentHero>

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
                <CommonItems items={_mockProjects} />

            </Container>


            <GetDonate />
        </>
    );
}