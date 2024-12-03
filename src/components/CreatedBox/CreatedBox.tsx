import { FC } from "react";
import { Button } from "../Button/Button";
import { CreatedPosition } from "../CreatedPosition/CreatedPosition";
import { CreatedBoxProps } from "./CreatedBox.types";

export const CreatedBox: FC<CreatedBoxProps> = ({
    positions,
    onAddNewPosition,
    onDelete,
    onEdit,
}) => {
    return (
        <div className="border border-border-primary rounded-lg overflow-hidden">
            {positions.map((position) => (
                <CreatedPosition
                    key={position.link}
                    name={position.name}
                    link={position.link}
                    onAddNewPosition={onAddNewPosition}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
            <div className="py-5 px-6">
                <Button variant="secondary" onClick={onAddNewPosition}>
                    Dodaj pozycję menu
                </Button>
            </div>
        </div>
    );
};
