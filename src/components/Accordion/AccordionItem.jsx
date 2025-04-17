import React, { useRef } from 'react'
import styles from './Accordion.module.css'
import { SlArrowDown } from "react-icons/sl";

function AccordionItem({faqItem, onClick, isOpen}) {

const itemRef = useRef(null)

  return (
            <li className={styles.element}>
                <button className={styles.question} onClick={() => onClick()}>
                    {faqItem.question}
                    <SlArrowDown className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}/>
                </button>
                    <div className={styles.collapse} 
                    style={
                        isOpen ? {height: itemRef.current.scrollHeight} : {height: "0"}
                    }>
                        <div className={styles.answer} ref={itemRef}>{faqItem.answer}</div>
                    </div>
                
            </li>
  )
}

export default AccordionItem
