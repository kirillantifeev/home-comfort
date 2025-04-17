import React from 'react'
import Categories from '../Categories/Categories'
import CardList from '../CardList/CardList'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../store/productsSlice'

export default function Main() {

 const data = useSelector(selectProducts)

  return (
    <main>
        <Categories/>
        <CardList cardData={data}/>
    </main>
  )
}
