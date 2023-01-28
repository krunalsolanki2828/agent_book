import React from 'react'
import Badge from '../components/badge/badge'
import Input from '../components/input/input';
import RoundImage from '../components/roundImage/roundImage'

// styles & other imports
import styles from '../styles/layout/header.module.css'
import { STRINGS } from '../utils/constants/string';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.profileContainer}>
          <div className={styles.badgeContainer}>
            <div className={styles.badge}>
              <RoundImage marginRight="5px" icon="/images/user.svg" />
              <Badge background="#FAAD14" color="white" size="large" round="5px">{STRINGS.FIFTEEN}</Badge>
            </div>
            <div className={styles.divider} />
            <div className={styles.badge}>
              <RoundImage marginRight="5px" icon="/images/user1.svg" />
              <Badge background="#B0A1DF" color="white" size="large" round="5px">{STRINGS.ELEVEN}</Badge>
            </div>
          </div>
          <div className={styles.arrowContainer}>
            <img src="/images/arrowDown.svg" alt="user found" />
          </div>
        </div>
        <RoundImage size="large" borderSize="1px" round="5px" borderColor="#eaeaea" marginRight="10px" icon="/images/suggestions.svg" />
        <RoundImage size="large" borderSize="1px" round="5px" backgroundColor="#0E8CFF" marginRight="10px" borderColor="#eaeaea" icon="/images/plus.svg" />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.tabletSearch}>
          <RoundImage size="large" borderSize="1px" round="5px" borderColor="#eaeaea" marginRight="10px" icon="/images/search.svg" />
        </div>
        <div className={styles.inputContainer}>
          <Input icon="/images/search.svg" placeholder="Search" />
        </div>
        <div className={styles.imageContainer}>
          <RoundImage size="large" borderSize="1px" round="5px" borderColor="#eaeaea" marginRight="10px" icon="/images/annoucement.svg" />
          <RoundImage size="large" borderSize="1px" round="5px" borderColor="#eaeaea" marginRight="10px" icon="/images/calender.svg" />
          <RoundImage size="large" borderSize="1px" round="5px" borderColor="#eaeaea" marginRight="10px" icon="/images/chat.svg" />
          <RoundImage size="medium" borderSize="0px" marginRight="5px" icon="/images/user.svg" />
        </div>
      </div>

    </div>
  )
}

export default Header
