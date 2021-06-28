import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function Rocket({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" {...props}>
            <path
                d="M12.13 20.19l-1.63-3.83c1.57-.58 3.04-1.36 4.4-2.27l-2.77 6.1zM4.64 10.5L.81 8.87l6.1-2.77C6 7.46 5.22 8.93 4.64 10.5zM20.61.39S15.66-1.731 10 3.93c-2.19 2.19-3.5 4.6-4.35 6.71-.28.75-.09 1.57.46 2.13l2.13 2.12c.55.56 1.37.74 2.12.46A19.1 19.1 0 0017.07 11C22.73 5.34 20.61.39 20.61.39zm-7.07 7.07c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .77.78.78 2.05 0 2.83-.78.78-2.05.78-2.83 0zm-5.66 7.07l-1.41-1.41 1.41 1.41zM5.24 20l3.64-3.64c-.34-.09-.67-.24-.97-.45L3.83 20h1.41zM1 20h1.41l4.77-4.76-1.42-1.41L1 18.59V20zm0-2.83l4.09-4.08c-.21-.3-.36-.62-.45-.97L1 15.76v1.41z"
                fill={color}
            />
        </svg>
    );
}

export default Rocket;
