import { MenuItemType, MenuType } from "@/types/types";

const updateChildren = (
    children: MenuItemType[],
    positions: number[],
    updateCallback: (item: MenuItemType) => MenuItemType | null
): MenuItemType[] => {
    if (positions.length === 0) return children;

    const [currentPosition, ...remainingPositions] = positions;

    return children
        .map((item, index) => {
            if (index !== currentPosition) return item;

            if (remainingPositions.length === 0) {
                return updateCallback(item);
            }

            return {
                ...item,
                children: updateChildren(
                    item.children,
                    remainingPositions,
                    updateCallback
                ),
            };
        })
        .filter(Boolean) as MenuItemType[];
};

export const updateMenuItems = (
    menuItems: MenuType[],
    positions: number[],
    updateCallback: (item: MenuItemType) => MenuItemType | null
): MenuType[] => {
    if (positions.length === 0) return menuItems;

    const [currentPosition, ...remainingPositions] = positions;

    return menuItems
        .map((menu, index) => {
            if (index !== currentPosition) return menu;

            return {
                ...menu,
                children: updateChildren(
                    menu.children,
                    remainingPositions,
                    updateCallback
                ),
            };
        })
        .filter((menu, index) => {
            if (index === currentPosition) {
                return menu.children.length > 0;
            }

            return true;
        });
};
