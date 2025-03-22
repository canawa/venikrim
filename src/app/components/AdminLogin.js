"use client"
import React from 'react'

import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://eddnkmvlagibcvzmmgeu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkZG5rbXZsYWdpYmN2em1tZ2V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1NzE2MzcsImV4cCI6MjA1ODE0NzYzN30.cI8b0epxKevEvBj1ioEXt8LwWJtQu5-YTrKUt7H7tkQ'
const supabase = createClient(supabaseUrl,supabaseKey)

const AdminLogin = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()

    const onSubmit = async(data) =>{
        const {data:responseData, error} = await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password
        })
        if (error) {
            console.log(error)
            return
        } else {
            console.log(data)
            window.location.href = '/admin'
        }
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email')} />
            <input {...register('password')}/>
            <button>Войти</button>
            </form>

    )
}
export default AdminLogin