import moveIcon from "@/icons/move.svg";
import Image from "next/image";
import { FC } from "react";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { CreatedPositionProps } from "./CreatedPosition.types";

export const CreatedPosition: FC<CreatedPositionProps> = ({
    name,
    link,
    onDelete,
    onEdit,
    onAddNewPosition,
}) => {
    return (
        <div className="bg-bg-primary py-4 px-6 flex justify-between items-center border-b border-border-secondary">
            <div className="flex items-center">
                <div className="w-10 h-10 flex items-center cursor-pointer">
                    <Image src={moveIcon} alt="move" />
                </div>
                <div className="flex flex-col gap-y-1.5">
                    <span className="font-semibold text-sm leading-5">
                        {name}
                    </span>
                    <span className="text-sm leading-5 text-text-tertiary">
                        {link}
                    </span>
                </div>
            </div>
            <ButtonGroup
                buttons={[
                    {
                        label: "Usuń",
                        onClick: onDelete,
                    },
                    {
                        label: "Edytuj",
                        onClick: onEdit,
                    },
                    {
                        label: "Dodaj pozycję menu",
                        onClick: onAddNewPosition,
                    },
                ]}
            />
        </div>
    );
};
