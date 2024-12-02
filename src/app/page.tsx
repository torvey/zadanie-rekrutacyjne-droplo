"use client";

import { CreationBox } from "@/components/CreationBox/CreationBox";
import { EmptyMenuBox } from "@/components/EmptyMenuBox/EmptyMenuBox";
import { useCallback } from "react";

export default function Home() {
    const handleAddMenuClick = useCallback(() => {
        // TODO: add logic
    }, []);

    const handleAddItemClick = useCallback(() => {
        // TODO: add logic
    }, []);

    const handleCancelItemClick = useCallback(() => {
        // TODO: add logic
    }, []);

    const handleDeleteItemClick = useCallback(() => {
        // TODO: add logic
    }, []);

    return (
        <div className="px-6 pt-7 flex flex-col gap-8">
            <EmptyMenuBox onClick={handleAddMenuClick} />
            <CreationBox
                onAdd={handleAddItemClick}
                onCancel={handleCancelItemClick}
                onDelete={handleDeleteItemClick}
            />
        </div>
    );
}
