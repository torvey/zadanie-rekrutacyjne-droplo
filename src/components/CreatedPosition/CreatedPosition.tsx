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
    items,
    className,
    onDelete,
    onEdit,
    onAddNewPosition,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const showEdit = useCallback(() => {
        setIsEditing(true);
    }, []);

    const handleCancel = useCallback(() => {
        setIsEditing(false);
    }, []);

    const handleEdit = useCallback(
        (position: number[], name: string, link: string) => {
            onEdit(position, name, link);
            setIsEditing(false);
        },
        [onEdit]
    );

    const handleDelete = useCallback(() => {
        onDelete(position);
    }, [onDelete, position]);

    const displayForm = useCallback(() => {
        setShowForm(true);
    }, []);

    const hideForm = useCallback(() => {
        setShowForm(false);
    }, []);

    const handleAdd = useCallback(
        (position: number[], name: string, link: string) => {
            onAddNewPosition(position, name, link);
            setShowForm(false);
        },
        [onAddNewPosition]
    );

    return (
        <>
            <div
                className={`bg-bg-primary py-4 px-6 flex justify-between items-center border-b border-border-secondary ${className}`}
            >
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
                                    onClick: handleDelete,
                                },
                                {
                                    label: "Edytuj",
                                    onClick: showEdit,
                                },
                                {
                                    label: "Dodaj pozycję menu",
                                    onClick: displayForm,
                                },
                            ]}
                        />
                    </>
                )}
            </div>
            {items.map(({ key, name, link, children }, idx) => (
                <div key={key} className="pl-16">
                    <CreatedPosition
                        name={name}
                        link={link}
                        items={children}
                        position={[...position, idx]}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        onAddNewPosition={onAddNewPosition}
                        className="border-l border-border-secondary rounded-b-lg"
                    />
                </div>
            ))}
            {showForm && (
                <div className="pl-16 pr-6 py-5 bg-bg-secondary border-b border-border-secondary">
                    <CreationBox
                        onAdd={handleAdd}
                        onCancel={hideForm}
                        onDelete={hideForm}
                        position={position}
                    />
                </div>
            )}
        </>
    );
};
