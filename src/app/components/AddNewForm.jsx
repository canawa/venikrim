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
    }, 4000)
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
    if (!selectedFile) {
      alert('Прикрепи картинки!!!')
      return
    }
    // TODO: загрузка файла и сохранение товара в локальную БД (API)
    console.log('Товар:', { ...data, file: selectedFile.name })
    alert('Подключите локальную БД для добавления товаров.')
  }

  return (
    <div>
      {pageLoaded ? (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            Название: <input 
              placeholder="Веник трехлучевой..." 
              {...register('productName', {
                required: 'Это поле обязательно для заполнения'
              })}
            /> 
            {errors.productName && <span style={{ color: 'red' }}>{errors.productName.message}</span>}
            <br/>
            
            Описание: <textarea 
              placeholder="Описание..." 
              {...register('description', {
                required: 'Это поле обязательно к заполнению!'
              })}
            ></textarea> 
            {errors.description && <span style={{ color: 'red' }}>{errors.description.message}</span>}
            <br/>
            
            Картинка товара: <input 
              type="file" 
              onChange={handleFileChange}
            /> 
              
            
            Цена: <input 
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