import React from 'react'
import styles from './User.module.css'
import { useForm } from 'react-hook-form'

export default function User() {

const {
    register,
    formState: {errors, isValid},
    handleSubmit,
    reset,
} = useForm({
    mode: 'onChange'
})

const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
}

return (
    <div className={styles.container}>
        <h2>
            Данные пользователя
        </h2>
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
            Имя:
            </label>
            <input className={styles.input} {...register('name', {
                required: "Это обязательное поле",
                pattern: {
                    value: /^[а-яё -]+$/i,
                    message: 'Разрешены только символы кириллицы'
                }
                
            })}/>
        
        <div className={styles.error}>
            {errors?.name && <p>{errors?.name?.message || 'Error'}</p>}
        </div>
        <label className={styles.label}>
            Фамилия:
            </label>
            <input className={styles.input} {...register('surname', {
                required: "Это обязательное поле",
                pattern: {
                    value: /^[а-яё -]+$/i,
                    message: 'Разрешены только символы кириллицы'
                }
                
            })}/>
        
        <div className={styles.error}>
            {errors?.surname && <p>{errors?.surname?.message || 'Error'}</p>}
        </div>
        <label className={styles.label}>
            Номер телефона:
            </label>
            <input className={styles.input} {...register('phone', {
                required: "Это обязательное поле",
                pattern: {
                    value: /^(\+7|8)?(\d{10})$/,
                    message: 'Введите номер телефона'
                }
                
            })}/>
        
        <div className={styles.error}>
            {errors?.phone && <p>{errors?.phone?.message || 'Error'}</p>}
        </div>
        <button className={styles.button} disabled={!isValid} type='submit'>
        Сохранить
        </button>
    </form>
    </div>
)
}