import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Softline Industries | Premium Home Appliances',
  description: 'Leading manufacturer of air coolers, smart TVs, and washing machines.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen flex flex-col`}>
        {/* Global Floating Light Navigation */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}