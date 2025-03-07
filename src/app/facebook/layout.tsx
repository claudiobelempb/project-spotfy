import type { Metadata } from 'next';
import { Arimo } from 'next/font/google';

const arimo = Arimo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Facebook Clone',
  description: 'Generated by create next app'
};

export default function FacebookLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${arimo.className}  dark:bg:black dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
