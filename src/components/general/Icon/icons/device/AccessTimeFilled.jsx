import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function AccessTimeFilled({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3Z"
                fill={color}
            />
        </svg>
    );
}

export default AccessTimeFilled;
