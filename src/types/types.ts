export type MenuItemType = {
    position: number;
    name: string;
    link: string;
    children: MenuItemType[];
};

export type MenuType = {
    position: number;
    children: MenuItemType[];
};
