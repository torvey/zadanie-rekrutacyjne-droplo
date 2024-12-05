import { MenuItemType } from "@/types/types";

export const addItemToMenu = (
    items: MenuItemType[],
    position: number[],
    newItem: MenuItemType
): MenuItemType[] => {
    // Jeśli pozycja jest pusta, dodajemy element do głównej tablicy
    if (position.length === 0) {
        return [...items, newItem];
    }

    // Pobieramy pierwszy indeks z pozycji i pozostałe
    const [currentIndex, ...remainingPositions] = position;

    // Sprawdzamy, czy indeks jest w zakresie
    if (currentIndex < 0 || currentIndex >= items.length) {
        console.warn("Invalid position:", position);
        return items; // Zwracamy oryginalną tablicę, jeśli pozycja jest niepoprawna
    }

    // Aktualizujemy wybrany element na bieżącym poziomie
    return items.map((item, index) => {
        if (index !== currentIndex) {
            return item; // Nie ten element, zwracamy bez zmian
        }

        // Rekurencja dla `children` w wybranym elemencie
        return {
            ...item,
            children: addItemToMenu(item.children, remainingPositions, newItem),
        };
    });
};
