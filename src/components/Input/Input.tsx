import { FC } from "react";
import { InputProps } from "./Input.types";

export const Input: FC<InputProps> = ({ icon, error, ...props }) => {
    return (
        <div>
            <div
                className={`rounded-lg border flex items-center py-2 px-3 ${
                    error ? "border-red-600" : "border-border-primary"
                }`}
            >
                {icon && <div className="mr-2">{icon}</div>}
                <input
                    {...props}
                    className="rounded-lg w-full outline-none placeholder:text-text-placeholder"
                />
            </div>
            {error && (
                <p className="text-sm text-red-500 font-medium text-right">
                    {error}
                </p>
            )}
        </div>
    );
};
