import * as React from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='layout'>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
