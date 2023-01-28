import React from 'react'

// styles & other imports
import styles from '../../styles/components/roundImage.module.css';
import Badge from '../badge/badge';

const RoundImage = ({ count, round, borderColor, borderSize, icon, marginRight, size, backgroundColor, children, padding, imageRight, width, paddingBlock }) => {
  const getSizes = () => {
    switch (size) {
      case 'small':
        return {
          width: '15px',
          height: '15px',
        };
      case 'medium':
        return {
          width: '18px',
          height: '18px'
        };
      case 'large':
        return {
          width: width ? width : '35px',
          height: '35px'
        };

    }
  }
  return (
    <div className={styles.card} style={{ ...getSizes(), position: 'relative', padding: padding, backgroundColor: backgroundColor, borderRadius: round, paddingBlock: paddingBlock, cursor: "pointer", display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: marginRight, border: `${borderSize ? borderSize : ''} solid ${borderColor}` }}>
      <img src={icon} alt='user found' style={{ marginRight: imageRight }} />
      {count && <Badge fontSize="10px" right="0" top="18px" color="white" padding="8px" position="absolute" size="medium" background="#0E8CFF" round="100%">{count}</Badge>}
      {children}
    </div>

  )
}

export default RoundImage







