/* eslint-disable new-cap */
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Urbanist, Montserrat } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
export const metadata = {
  title: "HSP @ UCR",
  description: "Highlander Space Program Official Website",
};

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});
// const mont = Mont({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-mont",
// });

// const arial = Arial({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-arial",
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${montserrat.variable}`}>
        <Navigation />
        <div className="pt-[9vh] lg:pt-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
