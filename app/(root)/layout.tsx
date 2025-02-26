import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <Header />
        <body>{children}</body>
        <Footer />
      </div>
    );
  }
  