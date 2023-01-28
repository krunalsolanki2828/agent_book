import React, { useState } from 'react'

// styles & other imports
import styles from '../styles/layout/layout.module.css';
import Header from './header'
import Sidebar from './sidebar'

const Layout = ({ children }) => {

	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<div className={styles.mainContainer}>
			<Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
			<div className={isSidebarOpen ? styles.container : styles.mobileContainer}>
				<Header />
				<div className={styles.checkListContainer}>
					<div className={styles.checkListImage}>
						<img src="/images/checklist.svg" alt="user" />
					</div>
					<div className={styles.checkListImage}>
						<img src="/images/list.svg" alt="user" />
					</div>
				</div>
				<div className={styles.contentContainer}>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Layout
