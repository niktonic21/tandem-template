import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

function SvgComponent() {
    return (
        <Svg width={12} height={12} viewBox="0 0 12 12">
            <Circle cx={6} cy={6} r={5.5} fill="#FFF" stroke="#008ABF" fillRule="evenodd" />
        </Svg>
    );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
