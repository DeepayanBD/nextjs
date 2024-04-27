import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { MainLayout } from "@/Layouts/Main";
import HomeHero from "@/Sections/Home/HomeHero";
import HomeVision from "@/Sections/Home/HomeVision";
import OurWork from "@/Sections/Common/OurWork";
import HomeSlider from "@/Sections/Home/HomeSlider";
import HomeSpeech from "@/Sections/Home/HomeSpeech";
import OurSupporters from "@/Sections/Common/OurSupporters";
import GetDonate from "@/Sections/Common/GetDonate";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <MainLayout>
            <Head title="Welcome" />
            <HomeHero />

            <HomeVision />

            <HomeSlider />

            <OurWork />

            <HomeSpeech />

            <OurSupporters />

            <GetDonate />
        </MainLayout>
    );
}
