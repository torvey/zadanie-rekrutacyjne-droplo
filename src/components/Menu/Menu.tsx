import { useShowAndHide } from "@/hooks/useShowAndHide";
import { FC, useCallback } from "react";
import { Button } from "../Button/Button";
import { CreateBox } from "../CreateBox/CreateBox";
import { MenuItem } from "../MenuItem/MenuItem";
import { MenuProps } from "./Menu.types";

export const Menu: FC<MenuProps> = ({
    items,
    onAddNewPosition,
    onDelete,
    onEdit,
}) => {
    const { display, hide, show } = useShowAndHide();

    const handleAdd = useCallback(
        (position: number[], name: string, link: string) => {
            onAddNewPosition(position, name, link);
            hide();
        },
        [onAddNewPosition, hide]
    );

    return (
        <div className="border border-border-primary rounded-lg overflow-hidden">
            {items.map(({ key, link, name, children }, idx) => (
                <MenuItem
                    key={key}
                    id={key}
                    name={name}
                    items={children}
                    link={link}
                    position={[idx]}
                    onAddNewPosition={onAddNewPosition}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
            {show && (
                <div className="py-4 px-6 bg-bg-secondary border-b border-border-secondary">
                    <CreateBox
                        onAdd={handleAdd}
                        onCancel={hide}
                        onDelete={hide}
                        position={[]}
                    />
                </div>
            )}
            <div className="py-5 px-6">
                <Button variant="secondary" onClick={display} disabled={show}>
                    Dodaj pozycję menu
                </Button>
            </div>
        </div>
    );
};
