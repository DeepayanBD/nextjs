import { ImgHTMLAttributes } from "react";

export default function ApplicationLogo(
    props: ImgHTMLAttributes<HTMLImageElement>
) {
    return <img src="/logo.svg" {...props} />;
}
