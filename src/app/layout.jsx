'use client'
import { Marmelad } from "next/font/google";
import './globals.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
const marmelad = Marmelad({
  subsets: ["latin", 'cyrillic'],
  weight: ['400'],
})








export default function RootLayout({ children }) {
  return (
    
    <html lang="ru">
      <head>
     
        

      </head>

      <body
        className={marmelad.className}>
          
        <div className="mainDiv">
          
          <Header/>
          <div className="mainPageRow">
          
          </div>
  
          <main className="mainContent">
            {children}
          </main>
          <div className="footerSettings"><Footer/></div>
          </div>   
         
        
      </body>
    </html>
  );
}
