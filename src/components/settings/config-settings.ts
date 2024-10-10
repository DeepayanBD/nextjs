import { defaultFont } from 'src/theme/core/typography';

import type { SettingsState } from './types';

// ----------------------------------------------------------------------

export const STORAGE_KEY = 'app-settings';

export const defaultSettings: SettingsState = {
  colorScheme: 'system',
  direction: 'ltr',
  contrast: 'default',
  navLayout: 'vertical',
  navColor: 'integrate',
  compactLayout: true,
  fontFamily: defaultFont,
} as const;
