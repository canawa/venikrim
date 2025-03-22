import React from 'react'
import Link from 'next/link'
import { Marmelad } from "next/font/google";
const marmelad = Marmelad({
  subsets: ["latin", 'cyrillic'],
  weight: ['400'],
})
const Header = () => {
  return (
    <header className="header" align="left">
    <div className="logo">
   <Link href='/'><img src='./logo.png' className="logoImage"></img></Link>
    </div>
     <div className="about"> <h1>ВЕНИКРЫМ.РФ</h1> </div>
    <div className="cart" >
     
     <Link href='/order' className={marmelad.className}><button className="buttonCart" > Заказать</button></Link>
    </div>

 </header>
  )
}

export default Header