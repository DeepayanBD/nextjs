"use client";

import { Icon, IconifyIcon } from "@iconify/react";

export default function Iconify({
  icon,
  className,
}: {
  icon: IconifyIcon | string;
  className?: string;
}) {
  return <Icon icon={icon} className={className} />;
}
