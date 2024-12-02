import { FC } from "react";
import { InputProps } from "./Input.types";

export const Input: FC<InputProps> = ({ icon, ...props }) => {
    return (
        <div className="rounded-lg border border-border-primary flex items-center py-2 px-3 ">
            {icon && <div className="mr-2">{icon}</div>}
            <input
                {...props}
                className="rounded-lg w-full outline-none placeholder:text-text-placeholder"
            />
        </div>
    );
};
