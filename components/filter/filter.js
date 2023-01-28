import React from 'react'
import { iconData, userData } from '../../constant/constant';
// styles & other imports
import styles from "../../styles/components/filter.module.css";
import { STRINGS } from '../../utils/constants/string';
import RoundImage from '../roundImage/roundImage';

const Filter = () => {
   

    return (
        <div className={styles.filterContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.filterLeftContainer}>
                    <span className={styles.title}>{STRINGS.WORKFLOW}</span>
                    {iconData.map((item, index) => {
                        return (
                            <RoundImage key={index} size="large" borderSize="0px" backgroundColor={item.isActive ? "#0E8CFF" : "#e6e7e8"} round="100%" marginRight="10px" icon={item.icon} />
                        )

                    })}
                </div>
                <div className={styles.divider} />
                <div className={styles.filterRightContainer}>
                    {
                        userData.map((item, index) => {
                            return (
                                <RoundImage key={index} count={item.count} size="large" borderSize="0px" marginRight="5px" icon={item.icon} />
                            )
                        })
                    }
                </div>

            </div>

            <div className={styles.rightContainer}>
                <RoundImage size="large" borderSize="1px" round="5px" borderColor="#eaeaea" marginRight="10px" icon="/images/pinned.svg" />
                <RoundImage size="large" borderSize="1px" round="5px" borderColor="#eaeaea" marginRight="10px" icon="/images/folder.svg" />
                <RoundImage imageRight="5px" padding="10px" borderSize="1px" round="5px" borderColor="#eaeaea" marginRight="10px" icon="/images/save.svg" >
                    {STRINGS.VIEWS}
                </RoundImage>
                <RoundImage imageRight="5px" padding="10px" borderSize="1px" round="5px" borderColor="#eaeaea" marginRight="10px" icon="/images/filter.svg" >
                    {STRINGS.FILTER}
                </RoundImage>
                <RoundImage size="large" width="100px" paddingBlock="20px" imageRight="5px" padding="10px" borderSize="1px" round="5px" borderColor="#eaeaea" marginRight="10px" icon="/images/sort.svg" >
                    {STRINGS.SORT_BY}
                </RoundImage>
            </div>
        </div>
    )
}

export default Filter
