import React from 'react'
import Link from 'next/link'
import { Marmelad } from "next/font/google";
import Image from 'next/image';
const marmelad = Marmelad({
  subsets: ["latin", 'cyrillic'],
  weight: ['400'],
})
const Header = () => {
  return (
    <header className="header" align="left">
    <div className="logo">
   <Link href='/'><img src='/logo.png' className="logoImage"/></Link>
    </div>
     <div className="about"> <h1>ВЕНИКРЫМ.RU</h1> </div>
    <div className="cart" >
     
     <Link href='/order' className={marmelad.className}><button className="buttonCart" > Заказать</button></Link>
    </div>

 </header>
  )
}

export default Header