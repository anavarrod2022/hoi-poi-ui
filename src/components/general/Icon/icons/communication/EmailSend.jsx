import React from 'react';

function EmailSend({ color = '#788590', ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.35a5.8 5.8 0 0 1-.35-2 6 6 0 0 1 11-3.31V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
                fill={color}
            />
            <path d="M13 17h4v-3l5 4.5-5 4.5v-3h-4v-3Z" fill="#00A8BE" />
        </svg>
    );
}

export default EmailSend;