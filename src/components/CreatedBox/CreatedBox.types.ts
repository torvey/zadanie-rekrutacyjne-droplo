export type CreatedBoxProps = {
    positions: {
        name: string;
        link: string;
    }[];
    onDelete: () => void;
    onEdit: () => void;
    onAddNewPosition: () => void;
};
