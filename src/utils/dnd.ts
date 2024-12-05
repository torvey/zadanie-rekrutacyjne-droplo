import { MenuItemType } from "@/types/types";
import { UniqueIdentifier } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

export const reorderArray = (
    items: MenuItemType[],
    activeId: UniqueIdentifier,
    overId: UniqueIdentifier
): MenuItemType[] => {
    const activeIndex = items.findIndex(
        ({ key }) => key.toString() === activeId
    );
    const overIndex = items.findIndex(({ key }) => key.toString() === overId);

    if (activeIndex !== -1 && overIndex !== -1) {
        return arrayMove(items, activeIndex, overIndex);
    }

    return items.map((item) => {
        if (item.children.length) {
            return {
                ...item,
                children: reorderArray(item.children, activeId, overId),
            };
        }

        return item;
    });
};

export const getAllIds = (items: MenuItemType[]): string[] => {
    return items
        .map(({ key, children }) => {
            if (children.length) {
                return [key.toString(), ...getAllIds(children)];
            }

            return key.toString();
        })
        .flat();
};
