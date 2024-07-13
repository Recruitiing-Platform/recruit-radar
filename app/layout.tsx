import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import NavBarComponent from '@/components/NavBarComponent';
import FooterComponent from '@/components/FooterComponent';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RecruitRadar',
  description: 'Connecting you to your next job',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <NavBarComponent /> */}
          {children}
          {/* <FooterComponent /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
