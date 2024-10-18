
import { MainLayout } from 'src/layouts/main';

export default function Layout({ children }: { children: React.ReactNode }) {
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
