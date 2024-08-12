import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./common/navbar";
import Footer from "./common/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Dealer App - Find Your Perfect Vehicle",
  description:
    "Explore and compare a wide range of vehicles. Find your ideal car with ease using our intuitive car dealer app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const title = metadata.title || "Default Title";
  const description = metadata.description || "Default description";

  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <main className="bg-neutral-200 min-h-[85vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
