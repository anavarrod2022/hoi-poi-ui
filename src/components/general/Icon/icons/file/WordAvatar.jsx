import React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function WordAvatar({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
            <path
                d="M0 4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                fill="#D3E3FE"
            />
            <path
                d="M25.803 10.125c.198 0 .375.075.531.225a.711.711 0 0 1 .216.522v14.256a.711.711 0 0 1-.216.522.746.746 0 0 1-.53.225H13.796a.746.746 0 0 1-.531-.225.711.711 0 0 1-.216-.522V22.5H9.297a.762.762 0 0 1-.531-.216.762.762 0 0 1-.216-.531v-7.506c0-.198.072-.375.216-.531a.762.762 0 0 1 .531-.216h3.753v-2.628c0-.204.072-.378.216-.522a.746.746 0 0 1 .531-.225h12.006Zm-12.726 7.281 1.08 3.546h1.233l1.179-5.904h-1.242l-.702 3.492-.999-3.375H12.6l-1.071 3.393-.702-3.51H9.531l1.179 5.904h1.233l1.134-3.546Zm12.348 7.344V22.5h-11.25v2.25h11.25Zm0-3.375v-2.808H17.55v2.808h7.875Zm0-3.933v-2.817H17.55v2.817h7.875Zm0-3.942v-2.25h-11.25v2.25h11.25Z"
                fill="#245DFD"
            />
        </svg>
    );
}

export default WordAvatar;
