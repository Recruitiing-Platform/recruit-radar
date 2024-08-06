// components/Layout.tsx

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const pathname = usePathname();
  
  
  return (
    <div className="min-h-screen bg-recLightGrey text-recBody font-sans">
      <header className="bg-recPrimary text-recLight p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">RecruitRadar</div>
          <input type="text" placeholder="Search" className="p-2 rounded hidden md:block" />
        </div>
      </header>
      <div className="container mx-auto flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 bg-recLight p-4">
          <nav>
            <ul>
              <li className={`py-2 ${pathname === '/' ? 'font-bold' : ''}`}>
                <Link href="/">Profile</Link>
              </li>
              <li className={`py-2 ${pathname === '/certifications' ? 'font-bold' : ''}`}>
                <Link href="/certifications">Certifications</Link>
              </li>
              <li className={`py-2 ${pathname === '/experience' ? 'font-bold' : ''}`}>
                <Link href="/experience">Experience</Link>
              </li>
              <li className={`py-2 ${pathname === '/education' ? 'font-bold' : ''}`}>
                <Link href="/education">Education</Link>
              </li>
              <li className="py-2"><a href="#">Home</a></li>
              <li className="py-2"><a href="#">Notification</a></li>
              <li className="py-2"><a href="#">Messages</a></li>
              <li className="py-2"><a href="#">Settings</a></li>
              <li className="py-2"><a href="#">Support</a></li>
              <li className="py-2"><a href="#">Logout</a></li>
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
}

export default Layout;