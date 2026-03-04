"use client"
import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

const AdminLogin = () => {
    const {register,handleSubmit,reset} = useForm()

    const onSubmit = (data) => {
        console.log('Login:', data['login'])
        console.log('Password:', data['password'])

        fetch('http://localhost:8000/login/admin_login/', { // делаем запрос к API
            method: 'POST', 
            body: JSON.stringify(data), // отправляем данные в формате JSON (оборачиваем data в JSON)
            headers: { // устанавливаем заголовки
                'Content-Type': 'application/json' // устанавливаем заголовок Content-Type в application/json
            }
        })
        .then((response) => response.json()) // получаем ответ от API (стрелочная функция function(response) => response.json())
        .then((data) => console.log(data)) // выводим данные в консоль (стрелочная функция function(data) => console.log(data))
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