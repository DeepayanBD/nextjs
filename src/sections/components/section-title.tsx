'use client'

import { Stack, Divider, Typography } from "@mui/material";

import { banglaFont } from "src/theme/core";
import { bgGradient, stylesMode, } from "src/theme/styles";

export type SectionTitleProps = {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <Stack sx={{ textAlign: 'center', mb: 8 }}>
      <Typography
        variant="h3"
        component="h3"
        className={className}
        sx={(theme) => ({
          color: theme.vars.palette.text.primary, // MUI theme-based colors
          fontFamily: banglaFont
        })}
      >
        {title}
      </Typography>
      <Divider
        sx={(theme) => ({
          width: '33%',
          height: 8,
          mx: 'auto',
          my: 2,
          border: 0,

          ...bgGradient({
            color: `90deg, transparent 0%, ${theme.vars.palette.error.main} 50%, transparent 100%`,
          }),
          [stylesMode.dark]: {
            ...bgGradient({
              color: `90deg, transparent 0%, ${theme.vars.palette.error.dark} 50%, transparent 100%`,
            }),
          },
        })}
      />
    </Stack>
  );
}
