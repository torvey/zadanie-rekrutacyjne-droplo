import { FC, useCallback, useState } from "react";
import { Button } from "../Button/Button";
import { CreatedPosition } from "../CreatedPosition/CreatedPosition";
import { CreationBox } from "../CreationBox/CreationBox";
import { CreatedBoxProps } from "./CreatedBox.types";

export const CreatedBox: FC<CreatedBoxProps> = ({
    positions,
    onAddNewPosition,
    onDelete,
    onEdit,
}) => {
    const [showForm, setShowForm] = useState(false);

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
        <div className="border border-border-primary rounded-lg overflow-hidden">
            {positions.map(({ key, link, name, children }, idx) => (
                <CreatedPosition
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
            {showForm && (
                <div className="py-4 px-6 bg-bg-secondary border-b border-border-secondary">
                    <CreationBox
                        onAdd={handleAdd}
                        onCancel={hideForm}
                        onDelete={hideForm}
                        position={[]}
                    />
                </div>
            )}
            <div className="py-5 px-6">
                <Button variant="secondary" onClick={displayForm}>
                    Dodaj pozycję menu
                </Button>
            </div>
        </div>
    );
};
