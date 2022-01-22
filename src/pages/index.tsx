import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-[#f5f5f5]'>
          <div className='layout flex flex-col justify-center items-center min-h-screen text-center'>
            <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()}{' '} DappForce
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
