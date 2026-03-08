'use client'
import { NextSeo } from 'next-seo';
import React from "react"
import { useEffect } from "react"
import AddNewForm from "../components/AddNewForm"
import { useRouter } from 'next/navigation'
import { API_URL } from "../config"

const checkToken = async (router) => {
  
  const res = await fetch(`${API_URL}/admin_login_check/`, {
    credentials: 'include'
  })
  const data = await res.json()
  try { 
    if (data.payload.role === 'admin') {
      console.log('Типо вошел в админ панель')
    }
    else {
      router.push('/adminLogin')
    }
  } catch (error) {
    router.push('/adminLogin')
    console.error('Error:', error)
  }
}

export default function Admin() {
  const router = useRouter()
  useEffect(() => { // при загрузке страницы проверяем токен
    checkToken(router)
  }, [])



  
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Добавить товар</h1>
        <AddNewForm/>
        
        

    </div>
  )
}