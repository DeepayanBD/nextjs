'use client';

import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useTranslate } from 'src/locales';
import { banglaFont } from 'src/theme/core';

// ----------------------------------------------------------------------

export function DonateButton() {
    const { t } = useTranslate();

    return (
        <Button
            href={paths.donate}
            LinkComponent={RouterLink}
            color="error"
            variant="contained"
            sx={{ px: 2, fontFamily: banglaFont }}
        >
            {t('donate')}
        </Button>
    );
}
