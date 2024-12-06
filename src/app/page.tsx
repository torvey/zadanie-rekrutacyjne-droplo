"use client";

import { CreateBox } from "@/components/CreateBox/CreateBox";
import { EmptyMenuBox } from "@/components/EmptyMenuBox/EmptyMenuBox";
import { Menu } from "@/components/Menu/Menu";
import { useShowAndHide } from "@/hooks/useShowAndHide";
import { MenuItemType } from "@/types/types";
import { addItemToMenu } from "@/utils/add";
import { getAllIds, reorderArray } from "@/utils/dnd";
import { editMenuItems } from "@/utils/edit";
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { useCallback, useState } from "react";

export default function Home() {
    const [menuItems, setMenuItems] = useState<Array<MenuItemType>>([]);

    const { display, hide, show } = useShowAndHide();

    const handleAdd = useCallback(
        (position: number[], label: string, link: string) => {
            setMenuItems((prev) =>
                addItemToMenu(prev, position, {
                    key: Date.now(),
                    name: label,
                    link,
                    children: [],
                })
            );
            hide();
        },
        [hide]
    );

    const handleEdit = useCallback(
        (position: number[], label: string, link: string) => {
            setMenuItems((prev) =>
                editMenuItems(prev, position, (item) => {
                    return {
                        ...item,
                        name: label,
                        link,
                    };
                })
            );
        },
        []
    );

    const handleDelete = useCallback((position: number[]) => {
        setMenuItems((prev) => editMenuItems(prev, position, () => null));
    }, []);

    const handleDragEnd = useCallback((event: DragEndEvent) => {
        const { active, over } = event;

        if (!active || !over) return;

        setMenuItems((prev) => reorderArray(prev, active.id, over.id));
    }, []);

    return (
        <div className="px-6 py-7 flex flex-col gap-8">
            {menuItems.length === 0 && <EmptyMenuBox onClick={display} />}
            {show && (
                <CreateBox
                    onAdd={handleAdd}
                    onCancel={hide}
                    onDelete={hide}
                    position={[]}
                />
            )}

            <DndContext
                onDragEnd={handleDragEnd}
                collisionDetection={closestCenter}
            >
                <SortableContext items={getAllIds(menuItems)}>
                    {menuItems.length > 0 && (
                        <Menu
                            items={menuItems}
                            onAddNewPosition={handleAdd}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    )}
                </SortableContext>
            </DndContext>
        </div>
    );
}
