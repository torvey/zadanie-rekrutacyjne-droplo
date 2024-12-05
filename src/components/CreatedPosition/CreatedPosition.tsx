import moveIcon from "@/icons/move.svg";
import Image from "next/image";
import { FC, useCallback, useState } from "react";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { CreationBox } from "../CreationBox/CreationBox";
import { CreatedPositionProps } from "./CreatedPosition.types";

export const CreatedPosition: FC<CreatedPositionProps> = ({
    name,
    link,
    position,
    boxPosition,
    onDelete,
    onEdit,
    onAddNewPosition,
}) => {
    const [isEditing, setIsEditing] = useState(false);

    const showEdit = useCallback(() => {
        setIsEditing(true);
    }, []);

    const handleEdit = useCallback(
        (position: number[], name: string, link: string) => {
            onEdit([boxPosition, ...position], name, link);
            setIsEditing(false);
        },
        [onEdit, boxPosition]
    );

    const handleCancel = useCallback(() => {
        setIsEditing(false);
    }, []);

    return (
        <div className="bg-bg-primary py-4 px-6 flex justify-between items-center border-b border-border-secondary">
            {isEditing ? (
                <CreationBox
                    onAdd={handleEdit}
                    onCancel={handleCancel}
                    onDelete={handleCancel}
                    position={position}
                    defaultName={name}
                    defaultLink={link}
                />
            ) : (
                <>
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
                                onClick: () =>
                                    onDelete([boxPosition, ...position]),
                            },
                            {
                                label: "Edytuj",
                                onClick: showEdit,
                            },
                            {
                                label: "Dodaj pozycję menu",
                                onClick: onAddNewPosition,
                            },
                        ]}
                    />
                </>
            )}
        </div>
    );
};
