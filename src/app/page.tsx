"use client";

import { CreationBox } from "@/components/CreationBox/CreationBox";
import { EmptyMenuBox } from "@/components/EmptyMenuBox/EmptyMenuBox";
import { MenuType } from "@/types/types";
import { useCallback, useState } from "react";

export default function Home() {
    const [menuItems, setMenuItems] = useState<Array<MenuType>>([]);

    const handleAddMenuClick = useCallback(() => {
        setMenuItems((prev) => [
            {
                position: prev.length,
                children: [],
            },
            ...prev,
        ]);
    }, []);

    const handleAddItemClick = useCallback(() => {
        // TODO: add logic
    }, []);

    const handleCancelItemClick = useCallback((position: number) => {
        setMenuItems((prev) => {
            return prev
                .filter((menu) => menu.position !== position)
                .map((menu) => {
                    // decrement position of all menus after the deleted one

                    if (menu.position > position) {
                        menu.position = menu.position - 1;
                    }

                    return menu;
                });
        });
    }, []);

    return (
        <div className="px-6 py-7 flex flex-col gap-8">
            <EmptyMenuBox onClick={handleAddMenuClick} />
            {menuItems.map((menu) => {
                if (menu.children.length === 0) {
                    return (
                        <CreationBox
                            key={`creation_${menu.position}`}
                            position={menu.position}
                            onAdd={handleAddItemClick}
                            onCancel={handleCancelItemClick}
                            onDelete={handleCancelItemClick}
                        />
                    );
                }

                return <div key={`item_${menu.position}`}></div>;
            })}
        </div>
    );
}
