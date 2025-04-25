import {createContext, useState} from "react";


export const CARD_CTX = createContext({ items: new Map(), addItem: () => {}});

export function CardCtxProvider({children}) {

    const [items, setItems] = useState(new Map());
    const addItem = (item) => {
        setItems((prevItems) => {
            const newMap = new Map(prevItems);
            newMap.set(item.id, {
                name: item.name,
                count:  (newMap.get(item.id)?.count ?? 0) + 1,
                id: item.id,
                price: item.price,
            });
            return newMap;
        });
    };

    const updateCount = (itemId, count) => {
        setItems((prevItems) => {
            const newMap = new Map(prevItems);
            if (count === 0) {
                newMap.delete(itemId);
            } else {
                newMap.set(itemId, {
                    ...prevItems.get(itemId),
                    count: count
                });
            }
            return newMap;
        });
    }

    const clear = () => {
        setItems(new Map());
    }

    const ctx = {
        items: items,
        addItem,
        updateCount,
        clear
    }

    return <CARD_CTX value={ctx}> { children }</CARD_CTX>;

}