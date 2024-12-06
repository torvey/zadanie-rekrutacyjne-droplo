export type CreateBoxProps = {
    position: number[];
    defaultName?: string;
    defaultLink?: string;
    onDelete: (position: number[]) => void;
    onCancel: (position: number[]) => void;
    onAdd: (position: number[], label: string, link: string) => void;
};

export type FormDataType = {
    name: string;
    link: string;
};
