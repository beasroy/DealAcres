import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"], weight: ['400', '500', '700', '900'], });

export const metadata = {
  title: "DealAcres",
  description: "A Real estate Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='font-normal'>
          <Header />
          {children}
          <Analytics />
     
        </main>
      </body>
    </html>
  );
}
