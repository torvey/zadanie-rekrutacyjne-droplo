export type MenuItemType = {
    key: number;
    name: string;
    link: string;
    children: MenuItemType[];
};

export type MenuType = {
    key: number;
    children: MenuItemType[];
};
