import Header from "@/components/general/Header";
import "./globals.css";
import Footer from "@/components/general/Footer";

export const metadata = {
  title: "Sv Immo AG",
  description: "",
  icons: {
    icon: "/images/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body className="antialiased">{children}</body>
      <Footer />
    </html>
  );
}
