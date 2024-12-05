import { MenuItemType } from "@/types/types";

export type CreatedBoxProps = {
    positions: MenuItemType[];
    boxPosition: number;
    onDelete: (position: number[]) => void;
    onEdit: (position: number[], name: string, link: string) => void;
    onAddNewPosition: () => void;
};
