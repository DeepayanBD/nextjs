import { OurWork } from "src/sections/our-work";
import { GetDonate } from "src/sections/get-donate";
import { HomeHero } from "src/sections/home/home-hero";
import { HomeVision } from "src/sections/home/home-vision";
import { HomeSlider } from "src/sections/home/home-slider";
import { HomeSpeech } from "src/sections/home/home-speech";
import { OurSupporters } from "src/sections/our-supporters";

export function HomeView() {
    return (
        <>
            <HomeHero />

            <HomeVision />

            <HomeSlider />

            <OurWork />

            <HomeSpeech />

            <OurSupporters />

            <GetDonate />
        </>
    );
}