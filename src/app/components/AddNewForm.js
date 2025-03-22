"use client"
import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://eddnkmvlagibcvzmmgeu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkZG5rbXZsYWdpYmN2em1tZ2V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1NzE2MzcsImV4cCI6MjA1ODE0NzYzN30.cI8b0epxKevEvBj1ioEXt8LwWJtQu5-YTrKUt7H7tkQ'
const supabase = createClient(supabaseUrl,supabaseKey)



const AddNewForm = () =>  {
    const [pageLoaded, setPageLoaded] = useState(false) // хук состояния для отслеживания загрузки страницы

    const {register,handleSubmit,formState:{errors}} = useForm()
    const [file, setFile] = useState(null)  // хук состояния для отслеживания загрузки файла
    
    function pageLoading(params) { // функция для отслеживания загрузки страницы которая по истечении 4 секунд вызывает функцию setPageLoaded(true), где (true) значение которое передастся в хук состояния setPageLoaded
      setTimeout(() => {
        setPageLoaded(params)
      }, 4000)
    }
    
    useEffect(() => {
      pageLoading(true)
    }, [])


    const onSubmit = async (data) => {
      if (!file) {
        alert('Прикрепи картинки!!!')
      } else{
        const {data: responseData, error} = await supabase
        .from('products')
        .insert({
            'Название':data.productName,
            'Описание': data.description,
            'Цена': data.price,
        })
        if (error) {
            console.log(error)
        }
}
    }
  return (
    <div>
      {pageLoaded ? (
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
    Название:<input placeholder="Веник трехлучевой..." {...register('productName',
    {required:'Это поле обязательно для заполнения'})}/> <br/>
    Описание: <textarea placeholder="Описание..." {...register('description',
    {required:'Это поле обязательно к заполнению!'}
    )}></textarea> <br/>
    Картинка товара: <input type="file" {...register('image')}/> <br/>
    Доп картинки: <input type="file"/> <br/>
    Цена: <input {...register('price',
    {required:'Это поле обязательно для заполнения'})}/> <br/>
    <button>Добавить</button>
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

AddNewForm.propTypes = {}

export default AddNewForm

