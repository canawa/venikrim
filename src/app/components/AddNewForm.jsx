"use client"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const AddNewForm = () => {
  const [pageLoaded, setPageLoaded] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [selectedFile, setSelectedFile] = useState(null)

  function pageLoading(params) {
    setTimeout(() => {
      setPageLoaded(params)
    }, 200)
  }

  useEffect(() => {
    pageLoading(true)
  }, [])

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setSelectedFile(file)
    console.log(file)
  }

  const onSubmit = async (data) => {

    // TODO: загрузка файла и сохранение товара в локальную БД (API)
    const response = await fetch('http://localhost:8000/add_product/', {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const dataResponse = await response.json()
    if (dataResponse.status === 'success') {
      alert('Товар добавлен')
    }
    else {
      alert('Ошибка при добавлении товара')
    }

  }

  return (
    <div>
      {pageLoaded ? (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            Название: <input className='form-input'
              placeholder="Веник трехлучевой..." 
              {...register('name', {
                required: 'Это поле обязательно для заполнения'
              })}
            /> 
            {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
            <br/>
            
            Описание: <textarea 
              className='form-input'
              placeholder="Описание..." 
              {...register('description', {
                required: 'Это поле обязательно к заполнению!'
              })}
            ></textarea> 
            {errors.description && <span style={{ color: 'red' }}>{errors.description.message}</span>}
            <br/>
            
            Картинка товара (ссылка): <input 
              className='form-input' 
              {...register('picture', {
                required: 'Это поле обязательно для заполнения'
              })}
            /> 
              
            
            Цена: <input 
              className='form-input'
              {...register('price', {
                required: 'Это поле обязательно для заполнения'
              })}
            /> 
            {errors.price && <span style={{ color: 'red' }}>{errors.price.message}</span>}
            <br/>
            
            <button type="submit">Добавить</button>
          </form> 
        </div>
      ) : (
        <div>
          <h1>Проверка на администратора.... Подождите!</h1>
        </div>
      )}
    </div>
  )
}

export default AddNewForm