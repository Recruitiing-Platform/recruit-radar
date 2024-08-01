import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import RecruitRadarContextProvider from '@/contexts/useRecruitRadarContext';
import { Toaster } from '@/components/ui/toaster';

const manrope = Manrope({ subsets: ['latin'] });

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
