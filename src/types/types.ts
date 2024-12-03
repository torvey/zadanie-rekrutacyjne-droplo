export type MenuItemType = {
    position: number;
    name: string;
    link: string;
    children: MenuItemType[];
};

export type MenuType = {
    key: number;
    position: number;
    children: MenuItemType[];
};
