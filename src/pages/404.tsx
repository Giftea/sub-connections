import Link from 'next/link';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section>
          <div>
            <RiAlarmWarningFill size={60} />
            <h1>Page Not Found</h1>
            <Link href='/'>Back to Home</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
