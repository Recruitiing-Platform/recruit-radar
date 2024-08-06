import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-recLightGrey text-recBody font-sans">
      <header className="bg-recPrimary text-recLight p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">RecruitRadar</div>
          <input type="text" placeholder="Search" className="p-2 rounded" />
        </div>
      </header>
      <div className="container mx-auto flex">
        <aside className="w-1/4 bg-recLight p-4">
          <nav>
            <ul>
              <li className="py-2"><a href="#" className="block">Home</a></li>
              <li className="py-2"><a href="#" className="block">Profile</a></li>
              <li className="py-2"><a href="#" className="block">Jobs</a></li>
              <li className="py-2"><a href="#" className="block">Notification</a></li>
              <li className="py-2"><a href="#" className="block">Messages</a></li>
              <li className="py-2"><a href="#" className="block">Settings</a></li>
              <li className="py-2"><a href="#" className="block">Support</a></li>
              <li className="py-2"><a href="#" className="block">Logout</a></li>
            </ul>
          </nav>
        </aside>
        <main className="w-3/4 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
