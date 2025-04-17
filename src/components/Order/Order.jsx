import React from 'react'
import styles from './Order.module.css'
import { FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOrder } from '../../store/ordersSlice';

export default function Order({order}) {

  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);

  const onDeleteOrder = (id) => {
    dispatch(deleteOrder(id))
  }

  return (
    <div className= {styles.container}>
                <div className= {styles.imageContainer}>
                    <img className= {styles.img} src={order.image} alt={order.title}/>
                </div>
                <div className= {styles.containerText}>
                    <h3 className={styles.title}>{order.title}</h3>
                    <b className={styles.price}>{order.price} ₽</b>
                </div>  
                <FaTrash className={styles.delete} onClick={() => onDeleteOrder(order.id)}/>
    </div>
  )
}
