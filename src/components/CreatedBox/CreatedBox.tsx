import { FC } from "react";
import { Button } from "../Button/Button";
import { CreatedPosition } from "../CreatedPosition/CreatedPosition";
import { CreatedBoxProps } from "./CreatedBox.types";

export const CreatedBox: FC<CreatedBoxProps> = ({
    positions,
    boxPosition,
    onAddNewPosition,
    onDelete,
    onEdit,
}) => {
    return (
        <div className="border border-border-primary rounded-lg overflow-hidden">
            {positions.map(({ link, name }, idx) => (
                <CreatedPosition
                    key={link}
                    name={name}
                    link={link}
                    position={[idx]}
                    boxPosition={boxPosition}
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
