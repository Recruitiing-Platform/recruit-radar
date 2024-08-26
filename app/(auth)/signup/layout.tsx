import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import RecruitRadarContextProvider from '@/contexts/useRecruitRadarContext';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'RecruitRadar | Signup',
  description: 'Signup to begin with RecruitRadar',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecruitRadarContextProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider>
    </RecruitRadarContextProvider>
  );
}
