import React, { useState } from 'react'

// styles & other imports
import styles from "../styles/layout/sidebar.module.css"
import SidebarMenu from '../components/sidebarMenu/sidebarMenu';
import Badge from '../components/badge/badge'
import { STRINGS } from '../utils/constants/string';
import { sidebarMenu } from '../constant/constant';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  
  const sidebarHandle = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className={isSidebarOpen ? styles.sidebarContainer : styles.mobileSidebar}>
      <div className={styles.sidebarTop}>
        <div className={isSidebarOpen ? styles.container : styles.mobileContainer}>
          {isSidebarOpen && <div className={styles.dropdownContainer}>
            <Badge round="100%" size="medium" background="#27E1BF" />
            <select className={styles.selectContainer}>
              <option>{STRINGS.ZAAN_CORP}</option>
            </select>
          </div>}
          <img onClick={sidebarHandle} className={styles.arrowIcon} src="/images/arrow.svg" alt="logo" />
        </div>
      </div>
      <div className={styles.menuContainer}>
        <div>
          {sidebarMenu.map((menu, index) => menu.isDivider ? <><div key={index} className={styles.divider} /></> : (
            <SidebarMenu isMobile={isSidebarOpen} key={index} title={menu.title} icon={menu.icon} notification={menu.notification} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Sidebar
