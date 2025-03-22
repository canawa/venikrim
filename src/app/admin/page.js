'use client'
import React from "react"
import { useEffect } from "react"
import AddNewForm from "../components/AddNewForm"
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://eddnkmvlagibcvzmmgeu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkZG5rbXZsYWdpYmN2em1tZ2V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1NzE2MzcsImV4cCI6MjA1ODE0NzYzN30.cI8b0epxKevEvBj1ioEXt8LwWJtQu5-YTrKUt7H7tkQ'
const supabase = createClient(supabaseUrl,supabaseKey)


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