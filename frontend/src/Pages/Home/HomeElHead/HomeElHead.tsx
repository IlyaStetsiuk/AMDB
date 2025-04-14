import React from 'react';
import Circle from '../../../Components/Small/Buttons/Circle';
import Arrows, { ArrowsProps } from '../../../Components/Small/Buttons/Arrows';
import './HomeElHead.css';

interface HomeElHeadProps {
    arrows: ArrowsProps;
    text: string;
}

const HomeElHead = ({arrows, text} : HomeElHeadProps) => {
    return (
        <div className="homeElHead">
            <div className="name">
                <Circle size={6} color='var(--secondary-color)' />
                <div className="name-text">
                    {text}
                </div>
            </div>
            <Arrows size={42} onRightClick={arrows.onRightClick} onLeftClick={arrows.onLeftClick} leftActive={arrows.leftActive} rightActive={arrows.rightActive} />
        </div>
    );
}

export default HomeElHead;
