"use client"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import supabase from './Supabase'
const supabaseUrl = 'https://eddnkmvlagibcvzmmgeu.supabase.co';
const AddNewForm = () => {
  const [pageLoaded, setPageLoaded] = useState(false) // хук состояния для отслеживания загрузки страницы
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [selectedFile, setSelectedFile] = useState(null) // хук состояния для отслеживания загрузки файла
  
  // Функция для отслеживания загрузки страницы
  function pageLoading(params) {
    setTimeout(() => {
      setPageLoaded(params)
    }, 4000)
  }
  
  useEffect(() => {
    pageLoading(true)
  }, [])

  // Обработчик выбора файла
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
    
    try {
      // Загрузка файла
      const fileName = `${Date.now()}-${selectedFile.name}` // создание уникального названия файла
      const { data: fileData, error: uploadError } = await supabase.storage
        .from('photos')
        .upload(fileName, selectedFile)
      
      if (uploadError) {
        console.error('Ошибка загрузки файла:', uploadError)
        return
      }
      
      // Получение URL загруженного файла
      const fileUrl = `${supabaseUrl}/storage/v1/object/public/photos/${fileData.path}`
      
      // Сохранение данных продукта
      const { data: responseData, error } = await supabase
        .from('products')
        .insert({
          'Название': data.productName,
          'Описание': data.description,
          'Цена': data.price,
          'Картинка': fileUrl,
        })
        
      if (error) {
        console.error('Ошибка сохранения данных:', error)
      } else {
        alert('Товар успешно добавлен!')
        console.log(data)
      }
    } catch (error) {
      console.error('Произошла ошибка:', error)
    }
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