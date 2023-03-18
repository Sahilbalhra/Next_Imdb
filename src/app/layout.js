import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "IMDB Clone",
  description: "All Movies App are available here",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Header />
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
