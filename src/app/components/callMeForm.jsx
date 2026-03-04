'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

function CallMeForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    // TODO: сохранение заявки в локальную БД (API)
    console.log('Заявка:', data)
    alert('Данные отправлены! Мы вам перезвоним!')
    reset()
  };

  return (
    <div className='callMeDiv'>
    <div className="callme-form">
      <h2 className="form-title">Оставить заявку</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input 
            type="text" 
            className="form-input"
            placeholder='Имя' 
            required
            {...register('name')}
          />
        </div>
        
        <div className="form-group">
          <input 
            type="tel" 
            className="form-input"
            placeholder='Телефон' 
            required
            {...register('phone')}
          />
        </div>
        
        <div className="form-group">
          <textarea 
            className="form-input form-textarea"
            placeholder='Сообщение' 
            {...register('message')}
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Отправить
        </button>
      </form>
    </div>
    </div>
  );
}

export default CallMeForm;