import type { ReactNode } from 'react';

import { MainLayout } from 'src/layouts/main';

export default function Layout({ children }: { children: ReactNode }) {
  return <MainLayout> {children} </MainLayout>;
}
