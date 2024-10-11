'use client';

import type { ButtonProps } from '@mui/material/Button';

import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useTranslate } from 'src/locales';
import { banglaFont } from 'src/theme/core';

export function DonateButton({ sx, ...other }: ButtonProps) {
  const { t } = useTranslate();
  return (
    <Button
      data-slot="donate"
      href={paths.donate}
      LinkComponent={RouterLink}
      color="primary"
      variant="contained"
      sx={{ px: 2, fontFamily: banglaFont, ...sx }}
      {...other}
    >
      {t('donate')}
    </Button>
  );
}
