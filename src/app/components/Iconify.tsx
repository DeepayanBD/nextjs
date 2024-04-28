"use client";

import { Icon, IconifyIcon } from "@iconify/react";

export default function Iconify({ icon }: { icon: IconifyIcon | string }) {
  return <Icon icon={icon} />;
}
