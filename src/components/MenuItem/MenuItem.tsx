import { useShowAndHide } from "@/hooks/useShowAndHide";
import moveIcon from "@/icons/move.svg";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import { FC, useCallback } from "react";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";
import { CreateBox } from "../CreateBox/CreateBox";
import { MenuItemProps } from "./MenuItem.types";

export const MenuItem: FC<MenuItemProps> = ({
    id,
    name,
    link,
    position,
    items,
    className,
    onDelete,
    onEdit,
    onAddNewPosition,
}) => {
    const {
        display: displayEdit,
        hide: hideEdit,
        show: showEdit,
    } = useShowAndHide();

    const {
        display: displayCreate,
        hide: hideCreate,
        show: showCreate,
    } = useShowAndHide();

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: id.toString() });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    const handleEdit = useCallback(
        (position: number[], name: string, link: string) => {
            onEdit(position, name, link);
            hideEdit();
        },
        [onEdit, hideEdit]
    );

    const handleDelete = useCallback(() => {
        onDelete(position);
    }, [onDelete, position]);

    const handleAdd = useCallback(
        (position: number[], name: string, link: string) => {
            onAddNewPosition(position, name, link);
            hideCreate();
        },
        [onAddNewPosition, hideCreate]
    );

    return (
        <div ref={setNodeRef} {...attributes} style={style}>
            <div
                className={`bg-bg-primary py-4 px-6 flex justify-between items-center border-b border-border-secondary ${className}`}
            >
                {showEdit ? (
                    <CreateBox
                        onAdd={handleEdit}
                        onCancel={hideEdit}
                        onDelete={hideEdit}
                        position={position}
                        defaultName={name}
                        defaultLink={link}
                    />
                ) : (
                    <>
                        <div className="flex items-center">
                            <div
                                className="w-10 h-10 flex items-center cursor-move"
                                {...listeners}
                            >
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
                                    onClick: displayEdit,
                                },
                                {
                                    label: "Dodaj pozycję menu",
                                    onClick: displayCreate,
                                },
                            ]}
                        />
                    </>
                )}
            </div>
            {items.map(({ key, name, link, children }, idx) => (
                <div key={key} className="pl-16">
                    <MenuItem
                        id={key}
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
            {showCreate && (
                <div className="pl-16 pr-6 py-5 bg-bg-secondary border-b border-border-secondary">
                    <CreateBox
                        onAdd={handleAdd}
                        onCancel={hideCreate}
                        onDelete={hideCreate}
                        position={position}
                    />
                </div>
            )}
        </div>
    );
};
