import { Marmelad } from "next/font/google";
import './globals.css';
import Link from "next/link";
import Header from "./components/Header";
const marmelad = Marmelad({
  subsets: ["latin", 'cyrillic'],
  weight: ['400'],
})





export const metadata = {
  title: "Create Next App",
  description: "Лучшие веники и мётлы в Крыму!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={marmelad.className}>
          
        <div className="mainDiv">
          <Header/>
          {children}
          </div>   
        
      </body>
    </html>
  );
}
