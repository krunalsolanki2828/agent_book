import React, { useState } from 'react'
import styles from "../../styles/components/cardColumn.module.css"
import TodoCard from '../todoCard/todoCard'
import { STRINGS } from '../../utils/constants/string';
import CreateCard from '../createCard/createCard';

const CardColumn = ({ title, count, cards }) => {

  const [isCreateCard, setIsCreateCard] = useState(false)

  const handleCreateCard = () => {
    setIsCreateCard(true)
  }
  return (
    <div className={styles.columnContainer}>
      <div className={styles.titleContainer}>
        <div className={styles.container}>
          <span className={styles.title}>{title}</span>
          <span className={styles.count}>({count}) </span>
          <img className={styles.imageIcon} src='/images/filter.svg' />
          <img className={styles.imageIcon} src='/images/sort.svg' />
        </div>
        <img className={styles.imageIcon} src='/images/dot.svg' />
      </div>
      <div className={styles.cardContainer}>
        {cards?.map((item, index) => {
          return (
            <TodoCard
              key={index}
              card={item}
            />
          )
        })
        }

      </div>
      {isCreateCard && <div>
        <CreateCard setIsCreateCard={setIsCreateCard} />
      </div>}
      {!isCreateCard && title !== "Completed" && <div onClick={handleCreateCard} className={styles.addTodoContainer}>
        <img src='/images/activeplus.svg' />
        <span>{STRINGS.ADD_CARD}</span>
      </div>}
    </div>
  )
}

export default CardColumn
