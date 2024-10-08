import type { SettingsState } from 'src/components/settings';
import type { Theme, Components } from '@mui/material/styles';

import { grey as coreGreyPalette } from '../core/palette';
import { createShadowColor } from '../core/custom-shadows';
import { components as coreComponents } from '../core/components';
import { hexToRgbChannel, createPaletteChannel } from '../styles';

import type { ThemeComponents, ThemeUpdateOptions } from '../types';

// ----------------------------------------------------------------------

/**
 * [1] settings @primaryColor
 * [2] settings @contrast
 */

export function updateCoreWithSettings(
  theme: ThemeUpdateOptions,
  settings: SettingsState
): ThemeUpdateOptions {
  const { colorSchemes, customShadows } = theme;

  return {
    ...theme,
    colorSchemes: {
      ...colorSchemes,
      light: {
        palette: {
          ...colorSchemes?.light?.palette,
          /** [1] */
          primary: getPalettePrimary(),
          /** [2] */
          background: {
            ...colorSchemes?.light?.palette?.background,
            default: getBackgroundDefault(settings.contrast),
            defaultChannel: hexToRgbChannel(getBackgroundDefault(settings.contrast)),
          },
        },
      },
      dark: {
        palette: {
          ...colorSchemes?.dark?.palette,
          /** [1] */
          primary: getPalettePrimary(),
        },
      },
    },
    customShadows: {
      ...customShadows,
      /** [1] */
      primary: createShadowColor(getPalettePrimary().mainChannel),
    },
  };
}

// ----------------------------------------------------------------------

export function updateComponentsWithSettings(settings: SettingsState) {
  const components: ThemeComponents = {};

  /** [2] */
  if (settings.contrast === 'hight') {
    const MuiCard: Components<Theme>['MuiCard'] = {
      styleOverrides: {
        root: ({ theme, ownerState }) => {
          let rootStyles = {};
          if (typeof coreComponents?.MuiCard?.styleOverrides?.root === 'function') {
            rootStyles = coreComponents.MuiCard.styleOverrides.root({ ownerState, theme }) ?? {};
          }

          return {
            ...rootStyles,
            boxShadow: theme.customShadows.z1,
          };
        },
      },
    };

    components.MuiCard = MuiCard;
  }

  return { components };
}

// ----------------------------------------------------------------------

function getPalettePrimary() {
  /** [1] */
  const selectedPrimaryColor = {
    "lighter": "#CDE9FD",
    "light": "#6BB1F8",
    "main": "#0C68E9",
    "dark": "#063BA7",
    "darker": "#021D6F",
    "contrastText": "#FFFFFF"
  };

  const updatedPrimaryPalette = createPaletteChannel(selectedPrimaryColor);

  return updatedPrimaryPalette;
}

function getBackgroundDefault(contrast: SettingsState['contrast']) {
  /** [2] */
  return contrast === 'default' ? '#FFFFFF' : coreGreyPalette[200];
}
