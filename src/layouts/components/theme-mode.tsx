import { m } from 'framer-motion';

import { Fab, Stack } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { varHover } from 'src/components/animate';
import { useSettingsContext } from 'src/components/settings';

type Mode = 'light' | 'dark' | 'system';

export function ThemeMode() {
  const settings = useSettingsContext();

  const { mode, setMode } = useColorScheme();

  const colorSchemes: { option: Mode; icon: string }[] = [
    { option: 'light', icon: 'line-md:sun-rising-filled-loop' },
    { option: 'system', icon: 'iconoir:pc-check' },
    { option: 'dark', icon: 'line-md:moon-loop' },
  ];

  const onChange = (newValue: Mode) => {
    settings.onUpdateField('colorScheme', newValue);
    setMode(newValue);
  };

  return (
    <Stack direction="row" spacing={1}>
      {colorSchemes.map((colorScheme) => {
        const selected = mode === colorScheme.option;

        return (
          <Fab
            key={colorScheme.option}
            color="inherit"
            aria-label={`Theme ${colorScheme.option}`}
            component={m.button}
            whileTap="tap"
            whileHover="hover"
            variants={varHover()}
            variant={selected ? 'circular' : 'outlined'}
            onClick={() => onChange(colorScheme.option)}
            size="small"
            sx={{ px: 3.5, borderRadius: 17, height: 34, minHeight: 34 }}
          >
            <Iconify icon={colorScheme.icon} />
          </Fab>
        );
      })}
    </Stack>
  );
}
