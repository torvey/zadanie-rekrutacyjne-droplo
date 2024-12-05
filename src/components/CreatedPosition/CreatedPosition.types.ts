export type CreatedPositionProps = {
    name: string;
    link: string;
    position: number[];
    boxPosition: number;
    onEdit: (position: number[], name: string, link: string) => void;
    onDelete: (position: number[]) => void;
    onAddNewPosition: () => void;
};
