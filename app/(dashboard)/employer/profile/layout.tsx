import type { Metadata } from 'next';
import '../../../globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import RecruitRadarContextProvider from '@/contexts/useRecruitRadarContext';
import NavBarComponent from '@/components/ProfileComponents/JobSeekerProfileComponents/NavBarComponent';

export const metadata: Metadata = {
  title: 'RecruitRadar | Employee',
  description: 'Connecting you to your next job',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <RecruitRadarContextProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBarComponent />
          {children}
          <Toaster />
        </ThemeProvider>
      </RecruitRadarContextProvider>
    </div>
  );
}
