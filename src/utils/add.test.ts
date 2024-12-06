import { MenuItemType } from "@/types/types";
import { describe, expect, it } from "vitest";
import { addItemToMenu } from "./add";

describe("addItemToMenu", () => {
    const mockItem: MenuItemType = {
        key: 1,
        name: "Item 1",
        link: "https://google.com",
        children: [],
    };
    const newItem: MenuItemType = {
        key: 2,
        name: "New Item",
        link: "https://twitter.com",
        children: [],
    };

    it("should add an item to the main array when position is empty", () => {
        const result = addItemToMenu([mockItem], [], newItem);
        expect(result).toEqual([mockItem, newItem]);
    });

    it("should add an item to a nested array", () => {
        const nestedItem: MenuItemType = {
            key: 3,
            name: "Nested Item",
            link: "https://facebook.com",
            children: [],
        };
        const items: MenuItemType[] = [{ ...mockItem, children: [nestedItem] }];
        const result = addItemToMenu(items, [0], newItem);
        expect(result[0].children).toEqual([nestedItem, newItem]);
    });

    it("should handle invalid position by returning the original array", () => {
        const result = addItemToMenu([mockItem], [1], newItem);
        expect(result).toEqual([mockItem]);
    });

    it("should add an item to a deeply nested array", () => {
        const deepNestedItem: MenuItemType = {
            key: 4,
            name: "Deep Nested Item",
            link: "https://youtube.com",
            children: [],
        };
        const items: MenuItemType[] = [
            { ...mockItem, children: [deepNestedItem] },
        ];
        const result = addItemToMenu(items, [0, 0], newItem);
        expect(result[0].children[0].children).toEqual([newItem]);
    });

    it("should not modify other items in the array", () => {
        const anotherItem: MenuItemType = {
            key: 5,
            name: "Another Item",
            link: "https://amazon.com",
            children: [],
        };
        const items: MenuItemType[] = [mockItem, anotherItem];
        const result = addItemToMenu(items, [0], newItem);
        expect(result[1]).toEqual(anotherItem);
    });
});
