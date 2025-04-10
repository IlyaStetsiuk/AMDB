import React from 'react';
import { ArrowDarkIcon } from '../../../assets/icons/exportIcons';
import SphereButton from './SphereButton';

interface SphereButtonProps {
    size?: number;
    leftActive?: boolean;
    rightActive?: boolean;
    onLeftClick?: () => void;
    onRightClick?: () => void;
    opacity?: number;
}

const Arrows = ({size = 42, leftActive = true, rightActive = true, opacity = 3, onLeftClick, onRightClick} : SphereButtonProps) => {
    return (
        <div className='arrows-button'>
            <SphereButton onClick={onLeftClick} opacity={opacity} rotation={90} active={leftActive} coefficient={1} size={size} src={ArrowDarkIcon} />
            <SphereButton onClick={onRightClick} opacity={opacity} rotation={270} active={rightActive} coefficient={1} size={size} src={ArrowDarkIcon} />
        </div>
    );
}

export default Arrows;
