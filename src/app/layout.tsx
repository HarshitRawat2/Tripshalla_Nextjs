import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";


export const metadata: Metadata = {
  title: "Tripshalla | Adventure in Rishikesh",
  description: "Book camping, trekking, rafting and adventure sports in Rishikesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
    
        {children}
        <Footer />
      </body>
    </html>
  );
}