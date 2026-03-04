'use client'
import { NextSeo } from 'next-seo';
import React from "react"
import { useEffect } from "react"
import AddNewForm from "../components/AddNewForm"

const checkSession = async () => {
  // TODO: проверка сессии через локальную БД/API
}

export default function Admin() {
  useEffect(() => {
    checkSession()
  }, [])



  
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Добавить товар</h1>
        <AddNewForm/>
        
        

    </div>
  )
}