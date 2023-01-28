import React from 'react'

import styles from '../../styles/components/createCard.module.css'
import { STRINGS } from '../../utils/constants/string';

const CreateCard = ({ setIsCreateCard }) => {
    return (
        <div className={styles.createContainer}>
            <div className={styles.titleContainer}>
                <span>{STRINGS.CARD_TITLE}</span>
                <img onClick={() => setIsCreateCard(false)} src='/images/close.svg' alt='close' />
            </div>
            <textarea className={styles.textArea} rows="4" cols="50" placeholder={STRINGS.CARD_DESCRIPTION} />
            <div className={styles.projectContainer}>
                <select placeholder='Select Project' className={styles.selectContainer}>
                    <option>{STRINGS.ZAAN_CORP}</option>
                </select>
                <button className={styles.button}>
                    {STRINGS.ADD}
                </button>

            </div>
        </div>
    )
}

export default CreateCard
