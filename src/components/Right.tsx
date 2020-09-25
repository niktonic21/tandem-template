import * as React from 'react';

function SvgComponent() {
    return (
        <svg width={26} height={26} viewBox="0 0 26 26">
            <path
                d="M7 25l12-12L7 1"
                stroke="#191919"
                strokeWidth={1.5}
                fill="none"
                fillRule="evenodd"
            />
        </svg>
    );
}

export default SvgComponent;
