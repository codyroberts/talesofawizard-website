import type { Metadata } from "next";
import "./globals.scss";
import Header from './components/header/header'
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tales of a Wizard",
  description: "An upcoming online RPG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Image src='/images/castle.png' width={2400} height={2400} alt='Background Image' className='background' />
      </body>
    </html>
  );
}
