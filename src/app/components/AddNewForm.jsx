"use client"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { API_URL } from '../config'

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

    if (file && file.type !== 'image/webp') {
      alert('Можно загрузить только WEBP-файл')
      e.target.value = ''
      setSelectedFile(null)
      return
    }

    setSelectedFile(file)
  }

  const onSubmit = async (data) => {
    if (!selectedFile) {
      alert('Пожалуйста, выберите WEBP-файл для картинки товара')
      return
    }

    const formData = new FormData() // хз почему но для картинок нельзя просто в Json запихивать
    formData.append('name', data.name) 
    formData.append('description', data.description)
    formData.append('price', data.price)
    formData.append('picture', selectedFile)

    const response = await fetch(`${API_URL}/add_product/`, {
      method: 'POST',
      body: formData, // передаем форму с данными
      credentials: 'include'
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
            
            Картинка товара (WEBP): <input 
              type='file'
              accept='image/webp'
              className='form-input' 
              {...register('picture', {
                required: 'Это поле обязательно для заполнения'
              })}
              onChange={handleFileChange}
            /> 
            {errors.picture && <span style={{ color: 'red' }}>{errors.picture.message}</span>}
              
            
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