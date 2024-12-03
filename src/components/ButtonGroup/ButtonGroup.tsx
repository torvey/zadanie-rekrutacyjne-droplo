import { FC } from "react";
import { ButtonGroupProps } from "./ButtonGroup.types";

export const ButtonGroup: FC<ButtonGroupProps> = ({ buttons }) => {
    return (
        <div className="border border-border-primary rounded-lg overflow-hidden">
            {buttons.map(({ label, onClick }) => (
                <button
                    key={label}
                    className="px-4 py-2.5 font-semibold leading-5 text-sm text-text-secondary transition-opacity border-l border-border-primary first:border-0 hover:opacity-80"
                    onClick={onClick}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};
