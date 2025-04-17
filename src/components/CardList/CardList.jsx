import Card from "../Card/Card";
import styles from './CardList.module.css'


export default function CardList ({cardData}) {


    return (
        <>
            <div className={styles.container}>
                {cardData.map(el => 
                    <Card key={el.id} props={el}/>
                )}
            </div>    
        </>
    )
}