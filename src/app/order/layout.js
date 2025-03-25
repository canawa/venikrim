import { Marmelad } from "next/font/google";
import '../globals.css';
import CallMeForm from "../components/callMeForm";

const marmelad = Marmelad({
  subsets: ["latin", 'cyrillic'],
  weight: ['400'],
})





export const metadata = {
  title: "Веникрым - Заказ",
  description: "Лучшие веники и мётлы в Крыму!",
};

export default function orderLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={marmelad.className}>
          <div> <CallMeForm/></div>
        {children}
      </body>
    </html>
  );
}
