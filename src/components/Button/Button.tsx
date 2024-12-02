"use client";

import { FC } from "react";
import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({
    children,
    className,
    variant = "primary",
    ...props
}) => {
    const variantClasses = {
        primary: "bg-btn-bg-primary text-btn-text-primary",
        secondary:
            "bg-btn-bg-secondary text-btn-text-secondary border border-border-primary",
        tertiary:
            "bg-btn-bg-secondary text-btn-text-tertiary border border-border-tertiary",
    };

    return (
        <button
            className={`py-2.5 px-3.5 rounded-lg font-semibold text-sm transition-all hover:opacity-80 ${variantClasses[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
