import React from 'react';
import Animated from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);


const AnimatedSVG = ({ animatedFocus, color, size }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 20 22">
            <AnimatedPath
                d="M1 8l9-7 9 7v11a2 2 0 01-2 2H3a2 2 0 01-2-2V8z"
                stroke={color}
                strokeWidth={2}
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default AnimatedSVG;