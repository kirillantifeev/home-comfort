import { useDispatch, useSelector } from 'react-redux'
import styles from './Card.module.css'
import { addOrder } from '../../store/ordersSlice';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

export default function Card ({props}) {

    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders);

    const handleAddOrder = () => {
        const order = {
            id: props.id,
            title: props.title,
            price: props.price,
            image: props.img
        }

        dispatch(addOrder(order))
        console.log(orders)
    }

    const navigate = useNavigate();
    const location = useLocation();

    const handleImageClick = () => {
        navigate(`/products/${props.id}`, { state: { background: location } });
    };

    return (
        <article className={styles.container}>
            <div onClick={handleImageClick} className={styles.imageContainer}>
                <img className= {styles.img} src={props.img} />
            </div>
            <div className={styles.info}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.text}>
                {props.description} 
                </p>
                <div className={styles.blockPrice}>
                <b className={styles.price}>{props.price} ₽</b>
                <button onClick={handleAddOrder} className={styles.button}>+</button>
                </div>
            </div>
            
        </article>
    )
}