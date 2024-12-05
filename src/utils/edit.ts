import { MenuItemType } from "@/types/types";

export const editMenuItems = (
    items: MenuItemType[],
    position: number[],
    updateCallback: (item: MenuItemType) => MenuItemType | null
): MenuItemType[] => {
    if (position.length === 0) return items;

    const [currentPosition, ...remainingPositions] = position;

    // Sprawdzamy, czy indeks jest w zakresie
    if (currentPosition < 0 || currentPosition >= items.length) {
        console.warn("Invalid position:", position);
        return items; // Zwracamy oryginalną tablicę, jeśli pozycja jest niepoprawna
    }

    return items
        .map((item, index) => {
            if (index !== currentPosition) return item;

            if (remainingPositions.length === 0) {
                return updateCallback(item);
            }

            return {
                ...item,
                children: editMenuItems(
                    item.children,
                    remainingPositions,
                    updateCallback
                ),
            };
        })
        .filter(Boolean) as MenuItemType[];
};
