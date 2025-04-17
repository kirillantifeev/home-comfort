import React, { useState } from 'react'
import styles from './Accordion.module.css'
import AccordionItem from './AccordionItem';

function Accordion({faqList}) {

const [openId, setId] = useState(null);

  return (
    <ul className={styles.container}>
        {faqList.map((faqItem, index) => (
            <AccordionItem 
            onClick={() => index === openId ? setId(null) : setId(index)}
            faqItem={faqItem} 
            isOpen={index === openId} 
            key={index}/>
        ))}
    </ul>
  )
}

export default Accordion
