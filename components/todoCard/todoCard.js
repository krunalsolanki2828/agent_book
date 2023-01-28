import React from 'react'
import styles from "../../styles/components/todoCard.module.css"
import Badge from '../badge/badge';
import RoundImage from '../roundImage/roundImage';

const TodoCard = ({ card }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.userFavoriteContainer}>
                <div className={styles.contactContainer}>
                    <Badge category={card.category} size="small" background="#fe3477" round="100%" />
                    <span className={styles.contactTitleCard}>{card.category}</span>
                </div>
                <img src='/images/faviorituser.svg' />
            </div>
            <span className={styles.subTitle}>{card.title}</span>
            <div className={styles.apiContainer}>
                {
                    card.api?.map((item, index) => {
                        return (
                            <span className={styles.apiTitle} key={index}>{item}</span>
                        )
                    }
                    )
                }
            </div>
            <div className={styles.socialImage}>
                <img src='/images/menu.svg' />
                {card.chatCount > 0 &&
                    <div className={styles.iconContainer}>
                        <img src='/images/chatCard.svg' />
                        <span>{card.chatCount}</span>
                    </div>
                }
                {card.checkListCount > 0 &&
                    <div className={styles.iconContainer}>
                        <img src='/images/check.svg' />
                        <span>{card.checkListCount}/9</span>
                    </div>
                }


                {card.copyCount > 0 &&
                    <div className={styles.iconContainer}>
                        <img src='/images/copy.svg' />
                        <span>{card.copyCount}</span>
                    </div>
                }

            </div>
            <div className={styles.durationContainer}>
                <span className={styles.duration}>{card.time}</span>
                <RoundImage size="medium" borderSize="0px" marginRight="5px" icon={card.user} />
            </div>
        </div>
    )
}

export default TodoCard
