"use client";

import { CreatedBox } from "@/components/CreatedBox/CreatedBox";
import { CreationBox } from "@/components/CreationBox/CreationBox";
import { EmptyMenuBox } from "@/components/EmptyMenuBox/EmptyMenuBox";
import { MenuType } from "@/types/types";
import { updateMenuItems } from "@/utils/edit";
import { useCallback, useState } from "react";

export default function Home() {
    const [menuItems, setMenuItems] = useState<Array<MenuType>>([]);

    const handleAddMenuClick = useCallback(() => {
        setMenuItems((prev) => [
            {
                key: Date.now(),
                position: prev.length,
                children: [],
            },
            ...prev,
        ]);
    }, []);

    const handleAddItemClick = useCallback(
        (position: number[], name: string, link: string) => {
            setMenuItems((prev) => {
                return prev.map((menu, idx) => {
                    if (idx === position[0]) {
                        return {
                            ...menu,
                            children: [
                                ...menu.children,
                                {
                                    key: Date.now(),
                                    position: menu.children.length,
                                    name,
                                    link,
                                    children: [],
                                },
                            ],
                        };
                    }

                    return menu;
                });
            });
        },
        []
    );

    const handleCancelItemClick = useCallback((position: number[]) => {
        setMenuItems((prev) => {
            return prev.filter((_menu, idx) => idx !== position[0]);
        });
    }, []);

    const handleEditItem = useCallback(
        (position: number[], name: string, link: string) => {
            setMenuItems((prevMenuItems) =>
                updateMenuItems(prevMenuItems, position, (item) => ({
                    ...item,
                    name,
                    link,
                }))
            );
        },
        []
    );

    const handleDeleteItem = useCallback((position: number[]) => {
        setMenuItems((prevMenuItems) =>
            updateMenuItems(prevMenuItems, position, () => null)
        );
    }, []);

    return (
        <div className="px-6 py-7 flex flex-col gap-8">
            <EmptyMenuBox onClick={handleAddMenuClick} />
            {menuItems.map((menu, idx) => {
                if (menu.children.length === 0) {
                    return (
                        <CreationBox
                            key={`creation_${menu.key}`}
                            position={[idx]}
                            onAdd={handleAddItemClick}
                            onCancel={handleCancelItemClick}
                            onDelete={handleCancelItemClick}
                        />
                    );
                }

                return (
                    <CreatedBox
                        key={menu.key}
                        boxPosition={idx}
                        positions={menu.children}
                        onAddNewPosition={() => null}
                        onDelete={handleDeleteItem}
                        onEdit={handleEditItem}
                    />
                );
            })}
        </div>
    );
}
