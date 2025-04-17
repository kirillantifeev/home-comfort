import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import styles from './Modal.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../../store/ordersSlice';
import { RxCross2 } from "react-icons/rx";
import { useParams } from 'react-router-dom';
import { initialState } from '../../store/categoriesSlice';
import { selectProducts } from '../../store/productsSlice';

const modalRoot = document.getElementById('modals');

export default function Modal({onClose}) {

    const { id } = useParams();

    const dispatch = useDispatch();

    const products = useSelector(selectProducts)
    

    const element = products.find((el) => el.id === Number(id));

    const handleAddOrder = () => {
        const order = {
            id: element.id,
            title: element.title,
            price: element.price,
            image: element.img
        }

        dispatch(addOrder(order))
    }

    

    useEffect (() => {

        const handleEsc = (e) => {
            e.key === "Escape" && onClose();
        }

        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('keydown', handleEsc)
        }

    }, [])

  return ReactDOM.createPortal(
    <div className={styles.container} onClick={onClose}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <div className={styles.imageContainer}>
                <img className= {styles.img} src={element.img} />
            </div>
            <div className={styles.info}>
                <h2 className={styles.title}>{element.title}</h2>
                <p className={styles.text}>
                {element.description} 
                </p>
                <div className={styles.blockPrice}>
                <b className={styles.price}>{element.price} ₽</b>
                <button onClick={handleAddOrder} className={styles.button}>+</button>
                </div>
            </div>
            <RxCross2 className={styles.close} onClick={onClose}/>
        </div>
        
    </div>,
    modalRoot
  )
}
