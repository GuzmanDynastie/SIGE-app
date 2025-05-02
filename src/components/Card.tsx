import styles from "../styles/components/Card.module.css";

interface CardProps {
    image?: string;
    text?: string;
    children?: React.ReactNode;
    nameImage?: string;
}

const Card: React.FC<CardProps> = ({ image, text, children, nameImage }) => {
    return (
        // <div className={styles.card}>
        //     <img src={image} className={styles.cardImg} alt={nameImage} />
        //     <div className={styles.cardBody}>
        //         <p className={styles.cardText}>{text}</p>
        //         <div className={styles.cardActions}>{children}</div>
        //     </div>
        // </div>

        <div className={styles.card}>
            {/* <img src={image} className={styles.cardImg} alt={nameImage} /> */}
            <h4>{text}</h4>
            
            <div className={styles.cardBody}>
            <hr style={{marginTop: "2px"}}/>
                {/* <p className={styles.cardText}>{text}</p> */}
                <div className={styles.cardActions}>{children}</div>
            </div>
        </div>
    );
};

export default Card;
