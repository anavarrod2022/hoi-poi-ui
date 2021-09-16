import * as React from 'react';
import { colors } from '../../../../../utils/styles/defaultTheme';

function Campaigns({ color = colors.neutral700, ...props }) {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 7.714c.243 0 .473.02.703.058a.951.951 0 1 0 .318-1.878A6.198 6.198 0 0 0 5.81 12 6.198 6.198 0 0 0 12 18.19a6.198 6.198 0 0 0 6.107-7.211.952.952 0 1 0-1.879.318A4.29 4.29 0 0 1 12 16.286 4.29 4.29 0 0 1 7.715 12 4.29 4.29 0 0 1 12 7.714Zm9.437.971a.953.953 0 0 0-1.798.63c.303.864.456 1.767.456 2.685 0 4.464-3.631 8.095-8.095 8.095S3.905 16.464 3.905 12 7.536 3.905 12 3.905c.918 0 1.821.153 2.685.456a.952.952 0 1 0 .63-1.798A10.009 10.009 0 0 0 12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10c0-1.133-.19-2.248-.563-3.315Zm-8.218 1.28 3.586-3.912.923-3.693a.476.476 0 0 1 .938.116v1.457l1.676-.922a.476.476 0 0 1 .646.647l-.921 1.675h1.457a.476.476 0 0 1 .115.938l-3.692.924-3.913 3.586c.215.358.347.772.347 1.219A2.384 2.384 0 0 1 12 14.381 2.384 2.384 0 0 1 9.619 12a2.384 2.384 0 0 1 2.38-2.381c.448 0 .862.131 1.22.347Z"
                fill={color}
            />
        </svg>
    );
}

export default Campaigns;
