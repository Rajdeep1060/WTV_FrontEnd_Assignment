import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';

type Item = {
    key: string;
    value: string;
};

const HomePage: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleEditItem = (key: string, newValue: string) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.key === key ? { ...item, value: newValue } : item
            )
        );
    };

    return (
        <>
            <h1>Item List</h1>
            <ItemList items={items} onEdit={handleEditItem} />
        </>
    );
};

export default HomePage;
