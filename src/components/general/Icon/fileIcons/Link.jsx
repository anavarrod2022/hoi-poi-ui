import React from 'react';

function Link({ ...props }) {
    return (
        <svg viewBox="0 0 18 18" {...props}>
            <path
                d="M5.705 15.59l2.965-2.965 1.319 1.318-2.966 2.966a3.728 3.728 0 01-5.273 0l-.659-.66a3.728 3.728 0 010-5.27l4.285-4.284a3.726 3.726 0 015.271 0l.66.659-1.319 1.318-.659-.66a1.863 1.863 0 00-2.635 0L2.41 12.297a1.864 1.864 0 000 2.636l.658.659a1.864 1.864 0 002.637 0zm6.59-13.18L9.33 5.376 8.01 4.058l2.966-2.966a3.728 3.728 0 015.273 0l.659.66a3.73 3.73 0 010 5.272l-4.284 4.283a3.728 3.728 0 01-5.273 0l1.319-1.318a1.864 1.864 0 002.636 0l4.283-4.283a1.865 1.865 0 000-2.637l-.658-.659a1.864 1.864 0 00-2.637 0z"
                fill="#CFD8DF"
                fill-rule="nonzero"
            />
        </svg>
    );
}

export default React.memo(Link);
