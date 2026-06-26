'use client'

import sideImage from "@/public/assets/svg/undraw_co-working_re_w93t.svg";

import { useTranslate } from "src/locales";

import { CommonView } from "../components/common-view";

export function UnderMaintenanceView() {
  const { t } = useTranslate()
  return (
    <CommonView
      sideImage={sideImage}
      sectionDescription={t('maintenanceDescription')}

      slotProps={{
        sectiontitle: { title: t('maintenanceTitle') }
      }}
    />
  );
}
