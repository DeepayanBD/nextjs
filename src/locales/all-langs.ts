'use client';

// date pickers (MUI)
import {
  enUS as enUSDate,
} from '@mui/x-date-pickers/locales';
// core (MUI)
import {
  arSA as arSACore,
  bnBD as bnBDCore,
} from '@mui/material/locale';
// data grid (MUI)
import {
  enUS as enUSDataGrid,
  arSD as arSDDataGrid,
} from '@mui/x-data-grid/locales';

// ----------------------------------------------------------------------

export const allLangs = [
  {
    value: 'bn',
    label: 'Bangla',
    countryCode: 'BD',
    adapterLocale: 'bn',
    numberFormat: { code: 'bn-BD', currency: 'BDT' },
    systemValue: {
      components: { ...bnBDCore.components, ...enUSDate.components, ...enUSDataGrid.components },
    },
  },
  {
    value: 'en',
    label: 'English',
    countryCode: 'US',
    adapterLocale: 'en',
    numberFormat: { code: 'en-US', currency: 'USD' },
    systemValue: {
      components: { ...enUSDate.components, ...enUSDataGrid.components },
    },
  },
  {
    value: 'ar',
    label: 'Arabic',
    countryCode: 'SA',
    adapterLocale: 'ar-sa',
    numberFormat: { code: 'ar', currency: 'AED' },
    systemValue: {
      components: { ...arSACore.components, ...arSDDataGrid.components },
    },
  },
];

/**
 * Country code:
 * https://flagcdn.com/en/codes.json
 *
 * Number format code:
 * https://gist.github.com/raushankrjha/d1c7e35cf87e69aa8b4208a8171a8416
 */
