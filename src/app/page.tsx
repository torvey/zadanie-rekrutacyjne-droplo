"use client";

import { CreatedBox } from "@/components/CreatedBox/CreatedBox";
import { CreationBox } from "@/components/CreationBox/CreationBox";
import { EmptyMenuBox } from "@/components/EmptyMenuBox/EmptyMenuBox";
import { MenuItemType } from "@/types/types";
import { addItemToMenu } from "@/utils/add";
import { getAllIds, reorderArray } from "@/utils/dnd";
import { editMenuItems } from "@/utils/edit";
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { useCallback, useState } from "react";

export default function Home() {
    const [menuItems, setMenuItems] = useState<Array<MenuItemType>>([]);
    const [showForm, setShowForm] = useState(false);

    const displayForm = useCallback(() => {
        setShowForm(true);
    }, []);

    const hideForm = useCallback(() => {
        setShowForm(false);
    }, []);

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
            setShowForm(false);
        },
        []
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
            {menuItems.length === 0 && <EmptyMenuBox onClick={displayForm} />}
            {showForm && (
                <CreationBox
                    onAdd={handleAdd}
                    onCancel={hideForm}
                    onDelete={hideForm}
                    position={[]}
                />
            )}

            <DndContext
                onDragEnd={handleDragEnd}
                collisionDetection={closestCenter}
            >
                <SortableContext items={getAllIds(menuItems)}>
                    {menuItems.length > 0 && (
                        <CreatedBox
                            positions={menuItems}
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
