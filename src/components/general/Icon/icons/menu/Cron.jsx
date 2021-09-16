import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function Cron({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.833 14.005a12.085 12.085 0 0 0 0-4.01l-1.929-.723c-.43-.162-.774-.505-.972-.988-.19-.458-.19-.942 0-1.359l.852-1.874a12.069 12.069 0 0 0-2.835-2.835l-1.874.852c-.417.189-.9.19-1.38-.009-.461-.19-.805-.531-.967-.963l-.723-1.93a12.08 12.08 0 0 0-4.01 0l-.723 1.93c-.162.432-.506.774-.987.971-.46.19-.943.19-1.36.001l-1.874-.852A12.068 12.068 0 0 0 2.216 5.05l.852 1.874c.19.417.19.9-.008 1.379-.19.463-.533.806-.964.968l-1.93.723a12.081 12.081 0 0 0 0 4.01l1.93.723c.431.162.774.505.972.988.19.458.19.941 0 1.359l-.852 1.874a12.069 12.069 0 0 0 2.835 2.835l1.874-.852c.417-.189.9-.19 1.379.009.462.19.806.531.968.963l.723 1.93a12.084 12.084 0 0 0 4.01 0l.723-1.93c.162-.432.506-.774.988-.971.459-.19.942-.19 1.359-.001l1.874.852a12.068 12.068 0 0 0 2.835-2.835l-.852-1.874c-.19-.418-.19-.9.008-1.379.19-.463.533-.806.964-.968l1.93-.723ZM18.546 12a6.545 6.545 0 1 1-13.091 0 6.545 6.545 0 0 1 13.09 0ZM13 8a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l2.793 2.707A1 1 0 0 0 15.5 14L13 11.586V8Z"
                fill={color}
            />
        </svg>
    );
}

export default Cron;
