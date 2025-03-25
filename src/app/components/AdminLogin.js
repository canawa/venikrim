"use client"
import React from 'react'

import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { createClient } from '@supabase/supabase-js'
import supabase from './Supabase'

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