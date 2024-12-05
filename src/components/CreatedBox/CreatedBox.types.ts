import { MenuItemType } from "@/types/types";

export type CreatedBoxProps = {
    positions: MenuItemType[];
    onDelete: (position: number[]) => void;
    onEdit: (position: number[], name: string, link: string) => void;
    onAddNewPosition: (position: number[], name: string, link: string) => void;
};
