import {Metadata} from 'next';
import {Roboto_Flex} from 'next/font/google';

const roboto_flex = Roboto_Flex({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Klubbers',
  description:
    'Create a modern landing page, sell your products and services and gather your community. All in one place.',
  icons: [
    {rel: 'icon', url: '/images/favicon.png'},
    {rel: 'apple-touch-icon', url: '/images/favicon.png'},
  ],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={roboto_flex.className}>{children}</body>
    </html>
  );
}
