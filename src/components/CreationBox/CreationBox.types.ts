export type CreationBoxProps = {
    position: number;
    onDelete: (position: number) => void;
    onCancel: (position: number) => void;
    onAdd: (label: string, link: string) => void;
};

export type FormDataType = {
    name: string;
    link: string;
};
