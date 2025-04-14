import React from 'react';

interface OvalButtonProps {
    icon: string;
    text: string;
    size?: number;
}

const OvalButton = ({icon, text, size=24}: OvalButtonProps) => {
    return (
        <div className='oval-button'>
            <img style={{height: size, width: size}} src={icon} alt="button"/>
            <p>{text}</p>
        </div>
    );
}

export default OvalButton;
