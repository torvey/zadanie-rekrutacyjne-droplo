export type CreationBoxProps = {
    onDelete: () => void;
    onCancel: () => void;
    onAdd: (label: string, link: string) => void;
};

export type FormDataType = {
    name: string;
    link: string;
};
