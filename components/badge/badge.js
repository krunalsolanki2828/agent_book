import React from 'react'

const Badge = ({ color, size, children, round, background, position, padding, right, top, fontSize, category }) => {
    const getSizes = () => {
        switch (size) {
            case 'small':
                return {
                    width: '5px',
                    height: '5px',

                };
            case 'medium':
                return {
                    width: '15px',
                    height: '15px'
                };
            case 'large':
                return {
                    width: '28px',
                    height: '22px'
                };
        }
    }

    const getColors = () => {
        switch (category) {
            case 'ContactRM':
                return '#FF3477';

            case 'AgentBook':
                return '#FF9F1A';

            case 'DW4RTeam':
                return '#6248FF';

            case 'Asteler.io':
                return '#70A0FF';

        }
    }
    return (
        <div style={{ backgroundColor: category ? getColors() : background, fontSize: fontSize, right: right, top: top, position: position, padding: padding, color: color, ...getSizes(), display: 'flex', alignItems: 'center', justifyContent: "center", borderRadius: round }}>
            {children}
        </div>
    )
}

export default Badge
