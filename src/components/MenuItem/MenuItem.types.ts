import { MenuItemType } from "@/types/types";

export type MenuItemProps = {
    id: number;
    name: string;
    link: string;
    items: MenuItemType[];
    position: number[];
    className?: string;
    onEdit: (position: number[], name: string, link: string) => void;
    onDelete: (position: number[]) => void;
    onAddNewPosition: (position: number[], name: string, link: string) => void;
};
