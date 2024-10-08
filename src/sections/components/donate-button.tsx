'use client';

import type { ButtonProps } from '@mui/material/Button';

import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

export function DonateButton({ sx, ...other }: ButtonProps) {
  return (
    <Button
      data-slot="donate"
      href={paths.donate}
      LinkComponent={RouterLink}
      color="primary"
      variant="contained"
      sx={{ px: 2, ...sx }}
      {...other}
    >
      Donate
    </Button>
  );
}
