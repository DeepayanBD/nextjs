import type { ReactNode } from 'react';

import { MainLayout } from 'src/layouts/main';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <MainLayout
      header={{
        sx: { position: { md: 'fixed' } },
      }}
    >
      {children}
    </MainLayout>
  );
}
