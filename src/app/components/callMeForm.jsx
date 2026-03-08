'use client'

import React from 'react'
import Link from 'next/link'
function CallMeSheet() {
  return (
    <div className="callMeDiv">
      <div className="callme-form">
        <h2 className="form-title">Контакты</h2>
        <div className="contact-info">
          <p className="contact-item">
            <span className="contact-label">Адрес: </span>
            <span>Республика Крым, г. Симферополь, С. Софиевка, ул. Василевского, д. 68</span>
          </p>
          <p className="contact-item">
            <span className="contact-label">Телефон:</span>
            <a href="tel:+79788386836">+7 (978) 838-68-36</a>
          </p>
          <p className="contact-item">
            <span className="contact-label">Email: </span>
            <a href="mailto:soriny@mail.ru">soriny@mail.ru</a>
          </p>
          <p className="contact-item">
            <span className="contact-label">Телеграм: <Link href="https://t.me/venikrim">@venikrim</Link> </span>
          </p>
         
        </div>
      </div>
    </div>
  )
}

export default CallMeSheet
