import React from 'react';
import './button.css';

interface ButtonProps {
    variant?: "normal" | "darker" | "yellow";
    text: string;
    icon?: string;
    onClick?: () => void;
    rotation?: number
}

const Button = ({ variant = "normal", text, icon, onClick, rotation = 0 }: ButtonProps) => {

    if (!icon) return (
        <div onClick={() => onClick} className="custom-button">
            <div className={variant}>
                <p>{text}</p>
            </div>
        </div>
    )

    return (
        <div onClick={() => onClick} className="custom-button custom-button-with-image">
            <div className={variant}>
                <p>{text}</p>
                <img
                    style={{
                        transform: `rotate(${rotation}deg)`,
                        transformOrigin: 'center',
                    }}
                    src={icon} alt="icon" />
            </div>
        </div>
    );
}

export default Button;
