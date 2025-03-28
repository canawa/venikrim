'use client'
import { Marmelad } from "next/font/google";
import './globals.css';
import { DefaultSeo, NextSeo } from "next-seo";
import Link from "next/link";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { useEffect } from "react";
const marmelad = Marmelad({
  subsets: ["latin", 'cyrillic'],
  weight: ['400'],
})








export default function RootLayout({ children }) {
  useEffect(()=>{

    

   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(100658854, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });



   const gtagScript = document.createElement("script");
   gtagScript.async = true;
   gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-HR055FTL96";
   document.head.appendChild(gtagScript);

   const gtagScriptInner = document.createElement("script");
   gtagScriptInner.innerHTML = `
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-HR055FTL96');
   `;
   document.head.appendChild(gtagScriptInner);


  },[])
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
  

          {children}
          <div className="footerSettings"><Footer/></div>
          </div>   
         
        
      </body>
    </html>
  );
}
