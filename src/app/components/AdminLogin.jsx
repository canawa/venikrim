"use client"
import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { API_URL } from '../config'

const AdminLogin = () => {
    const {register,handleSubmit,reset} = useForm()
    const router = useRouter()
    const onSubmit = (data) => {
        console.log('Login:', data['login'])
        console.log('Password:', data['password'])

        fetch(`${API_URL}/login/admin_login/`, {
            method: 'POST', 
            body: JSON.stringify(data), 
            credentials: 'include',// отправляем данные в формате JSON (оборачиваем data в JSON)
            headers: { // устанавливаем заголовки
                'Content-Type': 'application/json' // устанавливаем заголовок Content-Type в application/json
            }
        })
        .then((response) => {
            router.push('/admin')

        }) // получаем ответ от API (стрелочная функция function(response) => response.json())
        
        .catch((error) => console.error('Error:', error)) // выводим ошибку в консоль (стрелочная функция function(error) => console.error('Error:', error))
    }

    return(
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <input className="form-input" type="text" placeholder="login" {...register('login', { required: 'Это поле обязательно для заполнения' })} />
            <input className="form-input" type="password" placeholder="password" {...register('password', { required: 'Это поле обязательно для заполнения' })} />
            <button type="submit" className="submit-btn">Войти</button>
        </form>


    )
}
export default AdminLogin