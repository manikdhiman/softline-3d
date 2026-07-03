import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Loader from '@/components/Loader';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Softline Industries',
  description: 'Premium home appliances and electronics catalog',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#070A13]`}>
        {/* Global Navigation Wrapper */}
        <div className="relative z-50 p-6 pb-0 max-w-7xl mx-auto w-full">
          <Navbar />
        </div>
        
        {children}
        <Loader />
      </body>
    </html>
  );
}