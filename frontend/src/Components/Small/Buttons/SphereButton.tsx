import React from 'react';

interface SphereButtonProps {
    size: number;
    src: string;
    rotation?: number;
    coefficient?: number;
    active?: boolean;
    opacity?: number;
    onClick?: () => void;
}

const SphereButton = ({ size, src, rotation = 0, coefficient = 1.8, active = true, opacity = 5, onClick }: SphereButtonProps) => {
    return (
        <div onClick={() => onClick} style={{ height: size, width: size, opacity: active ? 1 : 0.5, backgroundColor: `var(--primary-color-o${opacity})`, }} className="play-button">
            <img
                style={{
                    height: size / coefficient,
                    transform: `rotate(${rotation}deg)`,
                    transformOrigin: 'center',
                }}
                src={src}
                alt="Button"
            />
        </div>
    );
};

export default SphereButton;
