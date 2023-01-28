import React from 'react'
import Badge from '../badge/badge'

// styles & other imports
import styles from "../../styles/components/sidebarMenu.module.css"

const SidebarMenu = ({ title, icon, notification, isMobile }) => {
    return (
        <div  className={styles.menuContainer}>
            <div className={styles.menu}>
                <img src={icon} alt='sidebar menu icon' />
                {isMobile && <span className={styles.menuTitle}>{title}</span>}
            </div>
            {notification && <Badge size="small" background="#E74926" round="100%" />}

        </div>
    )
}

export default SidebarMenu
