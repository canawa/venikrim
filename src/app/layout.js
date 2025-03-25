
import { Marmelad } from "next/font/google";
import './globals.css';
import Link from "next/link";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
const marmelad = Marmelad({
  subsets: ["latin", 'cyrillic'],
  weight: ['400'],
})





export const metadata = {
  title: "Веники и метлы в Крыму!",
  description: "Лучшие веники и мётлы в Крыму!",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={marmelad.className}>
          
        <div className="mainDiv">
          <Header/>
          <div className="mainPageRow">
          
          </div>
          {children}
          <div className="footerSettings"><Footer/></div>
          </div>   
         
        
      </body>
    </html>
  );
}
