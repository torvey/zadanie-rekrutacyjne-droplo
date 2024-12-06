import { MenuItemType } from "@/types/types";
import { describe, expect, it } from "vitest";
import { reorderArray } from "./dnd";

describe("reorderArray", () => {
    const mockItems: MenuItemType[] = [
        { key: 1, name: "Item 1", link: "https://google.com", children: [] },
        { key: 2, name: "Item 2", link: "https://twitter.com", children: [] },
        { key: 3, name: "Item 3", link: "https://facebook.com", children: [] },
    ];

    it("should return the same array if activeId is not found", () => {
        const result = reorderArray(mockItems, "4", "2");
        expect(result).toEqual(mockItems);
    });

    it("should return the same array if overId is not found", () => {
        const result = reorderArray(mockItems, "1", "4");
        expect(result).toEqual(mockItems);
    });

    it("should move the item to the correct position when both activeId and overId are found", () => {
        const result = reorderArray(mockItems, "1", "3");
        expect(result).toEqual([
            {
                key: 2,
                name: "Item 2",
                link: "https://twitter.com",
                children: [],
            },
            {
                key: 3,
                name: "Item 3",
                link: "https://facebook.com",
                children: [],
            },
            {
                key: 1,
                name: "Item 1",
                link: "https://google.com",
                children: [],
            },
        ]);
    });

    it("should handle nested arrays correctly", () => {
        const nestedItems: MenuItemType[] = [
            {
                key: 1,
                name: "Item 1",
                link: "https://google.com",
                children: [
                    {
                        key: 2,
                        name: "Item 2",
                        link: "https://twitter.com",
                        children: [],
                    },
                    {
                        key: 3,
                        name: "Item 3",
                        link: "https://facebook.com",
                        children: [],
                    },
                ],
            },
        ];
        const result = reorderArray(nestedItems, "2", "3");
        expect(result[0].children).toEqual([
            {
                key: 3,
                name: "Item 3",
                link: "https://facebook.com",
                children: [],
            },
            {
                key: 2,
                name: "Item 2",
                link: "https://twitter.com",
                children: [],
            },
        ]);
    });
});
