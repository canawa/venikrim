'use client'
import React from "react"
import { useEffect } from "react"
import AddNewForm from "../components/AddNewForm"
import supabase from "../components/Supabase"


const checkSession = async () => {
  const { data, error } = await supabase.auth.getSession()
  if (error || !data.session) {
    console.log(error)
    window.location.href = '/'
  } else {
    console.log(data)
  }
  
}

export default function Admin() {
  useEffect(()=>{
    checkSession()
  },[])



  
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Добавить товар</h1>
        <AddNewForm/>
        
        

    </div>
  )
}