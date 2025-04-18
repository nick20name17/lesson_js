import { useState } from 'react'

export const ItemList = () => {
    const initialItems = [
        {
            id: 1,
            name: 'Random Item',
        },
        {
            id: 2,
            name: 'Item 2',
        },
        {
            id: 3,
            name: 'Item 3',
        },
    ]

    const [items, setItems] = useState(initialItems)

    const handleRemoveItem = (id) => {
        const newItems = items.filter((item) => item.id !== id)
        setItems(newItems)
    }

    const addRandomItem = () => {
        const id = Math.floor(Math.random() * 1000)
        const newItem = {
            id,
            name: `Item ${id}`,
        }

        const newArray = [...items, newItem]

        setItems(newArray)
    }

    return (
        <div className="item-list">
            {items.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="item">
                        <span>{item.name}</span>
                        <button onClick={() => handleRemoveItem(item.id)}>X</button>
                    </div>
                )
            })}
        </div>
    )
}
