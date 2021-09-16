import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function SalesOrders({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 18c-1.1 0-1.99.9-1.99 2S6.9 22 8 22s2-.9 2-2-.9-2-2-2ZM2 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H8.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 21 4H6.21l-.94-2H2Zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z"
                fill={color}
            />
        </svg>
    );
}

export default SalesOrders;
