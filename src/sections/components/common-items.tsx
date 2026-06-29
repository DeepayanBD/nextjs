import type { ICommonItem } from 'src/types/common';

import Box from '@mui/material/Box';

import { CommonItem } from './common-item';


// ----------------------------------------------------------------------

type Props = {
  items: ICommonItem[];
};

export function CommonItems({ items }: Props) {
  return (
    <Box
      sx={{
        columnGap: 4,
        display: 'grid',
        rowGap: { xs: 4, md: 5 },
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        },
      }}
    >
      {items.map((item) => (
        <CommonItem key={item.id} item={item} />
      ))}
    </Box>
  );
}
