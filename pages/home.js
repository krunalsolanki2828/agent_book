
import React from 'react'
import CardColumn from '../components/cardColumn/cardColumn'
import Filter from '../components/filter/filter'
import { CardColumnData } from '../constant/constant'
import Layout from '../layouts/layout'
import styles from "../styles/pages/home.module.css"

const Home = () => {


    return (
        <Layout>
            <div className={styles.filterContainer}>
                <Filter />
            </div>
            <div className={styles.container}>
                {CardColumnData?.map((item, index) => {
                    return (
                        <CardColumn
                            key={index}
                            title={item.title}
                            count={item.count}
                            cards={item.cards}
                        />
                    )
                })}
            </div>
        </Layout>
    )
}

export default Home
