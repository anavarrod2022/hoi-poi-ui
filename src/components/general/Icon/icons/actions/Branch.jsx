import React from 'react';

function Branch({ color = '#788590', ...props }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M13 14c-3.36 0-4.46 1.35-4.82 2.24A3.002 3.002 0 017 22a3 3 0 01-3-3c0-1.31.83-2.42 2-2.83V7.83A2.99 2.99 0 014 5a3 3 0 116 0c0 1.31-.83 2.42-2 2.83v5.29c.88-.65 2.16-1.12 4-1.12 2.67 0 3.56-1.34 3.85-2.23A3 3 0 1120 7c0 1.34-.88 2.5-2.09 2.86C17.65 11.29 16.68 14 13 14zm-6 4a1 1 0 100 2 1 1 0 000-2zM7 4a1 1 0 100 2 1 1 0 000-2zm10 2a1 1 0 100 2 1 1 0 000-2z"
                fill={color}
            />
        </svg>
    );
}

export default Branch;
