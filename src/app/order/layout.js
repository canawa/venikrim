
import CallMeForm from "../components/callMeForm";
import React from 'react'
import '../globals.css'

export const metadata = {
  title: "Веникрым - Заказ",
  description: "Лучшие веники и мётлы в Крыму!",
};

export default function orderLayout({ children }) {
  return (
    <>
      {/* <div><CallMeForm /></div> */}
      {children}
    </>
  );
}
