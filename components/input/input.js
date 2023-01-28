import React from 'react'

// styles & other imports
import styles from '../../styles/components/input.module.css'


const Input = ({ placeholder, icon }) => {
    return (
        <div className={styles.inputContainer}>
            <img src={icon} />
            <input type="text" placeholder={placeholder} />
        </div>
    )
}

export default Input
