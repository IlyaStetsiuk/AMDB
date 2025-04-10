import React from 'react';

interface CircleProps {
    size: number;
    active: boolean;
    color?: string;
}

const Circle = ({ size, active, color }: CircleProps) => {

    const circleStyle: React.CSSProperties = {
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color ? color : active ? 'var(--primary-color-o6)' : 'var(--primary-color-o3)',
        display: 'inline-block',
    };

    return <div style={circleStyle} />;
};

export default Circle;
