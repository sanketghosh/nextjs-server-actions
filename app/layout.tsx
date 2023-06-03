import "../styles/globals.css";
/* import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] }) */

export const metadata = {
  title: "Server Actions Next",
  description: "server actions in next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100">{children}</body>
    </html>
  );
}
