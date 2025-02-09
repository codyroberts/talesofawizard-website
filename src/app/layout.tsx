import type { Metadata } from 'next';
import ProviderWrapper from './providerWrapper';
import './globals.scss';
import Header from './components/header/header';
import Image from 'next/image';
import Footer from './components/footer/footer';

export const metadata: Metadata = {
  title: 'Tales of a Wizard',
  description: 'An upcoming online RPG',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ProviderWrapper>
        <body>
          <Header />
          {children}
          <Footer />
          <Image
            src="/images/castle.png"
            width={2400}
            height={2400}
            alt="Background Image"
            className="background"
          />
        </body>
      </ProviderWrapper>
    </html>
  );
}
