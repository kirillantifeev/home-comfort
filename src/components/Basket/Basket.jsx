import React from 'react'
import styles from './Basket.module.css'
import Order from '../Order/Order'
import { useSelector } from 'react-redux'

export default function Basket() {

    const orders = useSelector((state) => state.orders)

    const showOrders = () => {

      return (
        <>
        {orders.map((order) => 
          (<Order key={order.id} order={order}/>)
          
        )
        }
        <span className={styles.summary}>Сумма заказа: {orders.reduce((acc, order) => acc += order.price, 0)} ₽</span>
        </>
      )
      
    }

  return (
    <section className={styles.container}>
      {orders.length > 0 ? showOrders() : (<div className={styles.basketNull}><h2>Корзина пуста</h2> </div>)} 
    </section>
  )
}
