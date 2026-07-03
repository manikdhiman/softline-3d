import { Inter } from 'next/font/google';
import './globals.css';
import Loader from '@/components/Loader'; // Import our new progress tracker

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Softline Industries',
  description: 'Premium home appliances and electronics catalog',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* Displays dynamically on top of any active page rendering WebGL */}
        <Loader />
      </body>
    </html>
  );
}