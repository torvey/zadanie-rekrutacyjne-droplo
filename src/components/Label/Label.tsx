import { FC } from "react";
import { LabelProps } from "./Label.types";

export const Label: FC<LabelProps> = ({ children, className, ...props }) => {
    return (
        <label
            className={`text-sm leading-5 font-medium ${className}`}
            {...props}
        >
            {children}
        </label>
    );
};
