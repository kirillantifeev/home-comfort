import React, { useState } from 'react'
import styles from './Categories.module.css'
import Order from '../Order/Order'
import { useSelector, useDispatch } from 'react-redux'
import { chooseCategory } from '../../store/categoriesSlice'
import { getProducts } from '../../store/productsSlice'

export default function Categories() {

    const categories = [
        {
            key: '',
            name: 'Всё'
        },
        {
            key: 'chairs',
            name: 'Стулья'
        },
        {
            key: 'tables',
            name: 'Столы'
        },
        {
            key: 'sofas',
            name: 'Диваны'
        }
    ]

    const dispatch = useDispatch();
    const list = useSelector((state) => state.categories);
    const [selectedCategory, setSelectedCategory] = useState('')

    const onChooseCategory = (key) => {
        setSelectedCategory(key)
        dispatch(getProducts(key))
    }

  return (
    <div className={styles.container}>
        {categories.map((el) => 
            (<div key={el.key} className={`${styles.element} ${selectedCategory === el.key ? styles.active : ''}`} onClick={() => {onChooseCategory(el.key)}}>{el.name}</div>)
        )}
        
    </div>
  )
}
