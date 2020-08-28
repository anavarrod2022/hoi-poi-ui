import React from 'react';

function Html({ ...props }) {
    return (
        <svg viewBox="0 0 18 18" {...props}>
            <g fill="none" fill-rule="evenodd">
                <path
                    d="M13.907 0H4.416c-.264 0-.479.21-.479.62v17.059c0 .11.215.321.479.321h13.106c.264 0 .478-.21.478-.321V4.172c0-.224-.03-.296-.084-.35L14.111.083A.292.292 0 0013.907 0z"
                    fill="#F16529"
                />
                <path d="M.003 8.678h17.98V.018H.003z" />
                <path
                    d="M14.625 8.059v-4.33c0-.342-.305-.619-.68-.619H.68c-.375 0-.68.277-.68.619v4.33c0 .342.305.619.68.619h13.265c.375 0 .68-.277.68-.619z"
                    fill="#7F391C"
                />
                <path
                    d="M3.833 7.481H3.28V6.06H1.85V7.48h-.557V4.282h.556v1.332h1.43V4.282h.554v3.2zm3.018-2.75h-.998v2.75h-.551v-2.75h-.99v-.449h2.539v.448zm1.253-.449l.922 2.452.921-2.452h.719v3.2h-.554V6.426l.055-1.411-.945 2.465h-.398l-.942-2.463.055 1.409V7.48h-.554V4.282h.72zm3.887 2.755h1.452v.444h-2.008V4.282h.556v2.755zM11.948 10.553a.311.311 0 00-.4.18l-1.86 4.95a.31.31 0 00.29.417.31.31 0 00.291-.2l1.86-4.949a.31.31 0 00-.181-.398zM9.268 11.243a.31.31 0 00-.438 0l-1.86 1.855a.309.309 0 000 .438l1.86 1.855a.31.31 0 00.438-.437l-1.641-1.637 1.641-1.637a.309.309 0 000-.437zM12.988 11.243a.31.31 0 00-.438 0 .309.309 0 000 .437l1.641 1.637-1.64 1.637a.309.309 0 00.218.528.31.31 0 00.22-.09l1.86-1.857a.309.309 0 000-.437l-1.86-1.855z"
                    fill="#FFF"
                />
            </g>
        </svg>
    );
}

export default React.memo(Html);
