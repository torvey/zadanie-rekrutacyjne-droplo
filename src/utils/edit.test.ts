import { MenuItemType } from "@/types/types";
import { describe, expect, it } from "vitest";
import { editMenuItems } from "./edit";

describe("editMenuItems", () => {
    const mockItems: MenuItemType[] = [
        { key: 1, name: "Item 1", link: "https://google.com", children: [] },
        { key: 2, name: "Item 2", link: "https://twitter.com", children: [] },
        { key: 3, name: "Item 3", link: "https://facebook.com", children: [] },
    ];

    it("should return the same array if position is empty", () => {
        const result = editMenuItems(mockItems, [], (item) => ({
            ...item,
            name: "Updated",
        }));
        expect(result).toEqual(mockItems);
    });

    it("should return the same array if position is invalid", () => {
        const result = editMenuItems(mockItems, [5], (item) => ({
            ...item,
            name: "Updated",
        }));
        expect(result).toEqual(mockItems);
    });

    it("should update the item at the specified position", () => {
        const result = editMenuItems(mockItems, [1], (item) => ({
            ...item,
            name: "Updated",
        }));
        expect(result).toEqual([
            {
                key: 1,
                name: "Item 1",
                link: "https://google.com",
                children: [],
            },
            {
                key: 2,
                name: "Updated",
                link: "https://twitter.com",
                children: [],
            },
            {
                key: 3,
                name: "Item 3",
                link: "https://facebook.com",
                children: [],
            },
        ]);
    });

    it("should handle nested items correctly", () => {
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
        const result = editMenuItems(nestedItems, [0, 1], (item) => ({
            ...item,
            name: "Updated",
        }));
        expect(result[0].children).toEqual([
            {
                key: 2,
                name: "Item 2",
                link: "https://twitter.com",
                children: [],
            },
            {
                key: 3,
                name: "Updated",
                link: "https://facebook.com",
                children: [],
            },
        ]);
    });

    it("should delete element if updateCallback returns null", () => {
        const result = editMenuItems(mockItems, [1], () => null);
        expect(result).toEqual([
            {
                key: 1,
                name: "Item 1",
                link: "https://google.com",
                children: [],
            },
            {
                key: 3,
                name: "Item 3",
                link: "https://facebook.com",
                children: [],
            },
        ]);
    });
});
