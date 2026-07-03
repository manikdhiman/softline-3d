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
      <body className={`${inter.className} bg-[#070A13] min-h-screen flex flex-col`}>
        {/* Main Global Navbar rendered perfectly flat at root level */}
        <Navbar />
        
        {/* Uniform Top Offset Container buffer spacing */}
        <div className="flex-1 pt-20 flex flex-col">
          {children}
        </div>
        
        <Loader />
      </body>
    </html>
  );
}