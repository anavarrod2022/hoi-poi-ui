import React, { memo } from 'react';

function Percentage({ color = '#7D8A96', ...props }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.037 3.986C4.346 4.635 4 5.47 4 6.49v.929c0 1.082.354 1.944 1.062 2.586.715.633 1.622.95 2.72.95 1.123 0 2.026-.324 2.71-.974.69-.649 1.037-1.48 1.037-2.492v-.941c0-1.059-.346-1.913-1.038-2.562C9.808 3.329 8.897 3 7.758 3c-1.122 0-2.03.329-2.72.986zm1.501 4.801c-.31-.332-.464-.765-.464-1.298v-.964c0-.55.15-.99.452-1.322.309-.34.72-.51 1.232-.51.513 0 .923.166 1.233.498.317.333.475.766.475 1.299v.952c0 .564-.154 1.013-.463 1.345-.31.325-.716.487-1.22.487-.513 0-.928-.162-1.245-.487zm6.983 5.22c-.708.642-1.062 1.48-1.062 2.516v.952c0 1.06.346 1.913 1.037 2.563.7.641 1.62.962 2.758.962 1.139 0 2.046-.325 2.721-.974.683-.657 1.025-1.488 1.025-2.493v-.929c0-1.09-.354-1.955-1.062-2.597-.7-.642-1.602-.962-2.708-.962-1.098 0-2.002.32-2.71.962zm1.488 4.825c-.317-.34-.475-.773-.475-1.299v-.964c0-.572.154-1.02.463-1.345.318-.324.728-.486 1.233-.486.496 0 .903.162 1.22.486.317.325.476.758.476 1.299v.975c0 .58-.15 1.032-.452 1.357-.293.317-.7.475-1.22.475-.504 0-.92-.166-1.245-.498zM7.5 20.249L18.165 4.821l-1.664-1.07L5.835 19.179l1.664 1.07z"
                fill={color}
            />
        </svg>
    );
}

export default memo(Percentage);