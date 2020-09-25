import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent() {
    return (
        <Svg width={26} height={26} viewBox="0 0 26 26">
            <Path
                d="M19 1L7 13l12 12"
                stroke="#191919"
                strokeWidth={1.5}
                fill="none"
                fillRule="evenodd"
            />
        </Svg>
    );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
