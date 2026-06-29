import type { BoxProps } from '@mui/material/Box';
import type { ICommonItem } from 'src/types/common';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { maxLine } from 'src/theme/styles';
import { useTranslate } from 'src/locales';

import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

type Props = BoxProps & {
    item: ICommonItem;
};

export function CommonItem({ item, sx, ...other }: Props) {
    const { t } = useTranslate(`${item.type}/${item.slug}`);

    return (
        <Box sx={sx} {...other}>
            <Image src={item.sideImage} alt={t('title')} ratio="1/1" sx={{ borderRadius: 2 }} />

            <Box sx={{ my: 2.5 }}>
                <Link
                    component={RouterLink}
                    href={paths[`${item.type}s`].details(item.slug)}
                    color="inherit"
                    variant="h5"
                    sx={(theme) => ({
                        ...maxLine({ line: 2, persistent: theme.typography.h5 }),
                    })}
                >
                    {t('title')}
                </Link>
            </Box>
        </Box>
    );
}
