"use client";

import { EmptyMenuBox } from "@/components/EmptyMenuBox/EmptyMenuBox";
import { useCallback } from "react";

export default function Home() {
    const handleAddMenuClick = useCallback(() => {
        // TODO: add logic
    }, []);

    return (
        <div className="px-6 pt-7">
            <EmptyMenuBox onClick={handleAddMenuClick} />
        </div>
    );
}
