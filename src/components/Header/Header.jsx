import React, { useState } from 'react';
import styles from './Header.module.css'
import { FaShoppingCart } from 'react-icons/fa';
import Basket from '../Basket/Basket';
import { Link, NavLink } from 'react-router-dom';

export default function Header (className) {
    const [openBasket, setOpenBasket] = useState(false);

    const setActive = ({isActive}) => isActive ? styles.navActive : styles.navLi;

    return (
        <header>
            <div className={styles.container}>
                <Link to={'/'} className={styles.title}>Home Comfort</Link>
                <div className={styles.shopBlock}>
                    <FaShoppingCart onClick={() => setOpenBasket(!openBasket)} className={`${styles.basket} ${openBasket ? styles.basketActive : ''}`}/>
                        {openBasket && (<Basket/>)}
                    <nav>
                        <ul className={styles.nav}>
                            <NavLink to={'/'} className={setActive}>Главная</NavLink>
                            <NavLink to={'/delivery'} className={setActive}>Шоу-рум</NavLink>
                            <NavLink to={'/user'} className={setActive}>Кабинет</NavLink>
                        </ul>
                    </nav>
                </div>
                
            </div>
            
            <div className={styles.logo}></div>
        </header>
    )
}