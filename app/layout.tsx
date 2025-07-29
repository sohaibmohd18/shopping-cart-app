import './globals.css';
import type { Metadata } from 'next';
import { Inter, Pacifico } from 'next/font/google';
import Navbar from '../components/Navbar';
import { CartProvider } from '../context/CartContext';

const inter = Inter({ subsets: ['latin'] });
const pacifico = Pacifico({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'A fancy shopping cart app built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 to-black text-white`}>
        <CartProvider>
          <h1 className={`text-center text-4xl py-6 text-pink-400 ${pacifico.className}`}>
            Shopping Cart
          </h1>
          <Navbar />
          <main className="p-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}