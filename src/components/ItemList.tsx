import React, { useState } from 'react';

type ItemValue = string | ItemObject;  
interface ItemObject {
    [key: string]: ItemValue;
}

type Item = {
    key: string;
    value: string; 
};

const renderObject = (obj: ItemObject): React.ReactNode => {
    return (
        <div className="object-view">
            {Object.entries(obj).map(([key, value]) => (
                <div key={key} className="object-item">
                    <strong>{key}:</strong> {typeof value === 'object' ? renderObject(value) : value}
                </div>
            ))}
        </div>
    );
};

const ItemList: React.FC<{ items: Item[]; onEdit: (key: string, value: string) => void }> = ({ items, onEdit }) => {
    const [editingItemKey, setEditingItemKey] = useState<string | null>(null);
    const [editedValue, setEditedValue] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleEditClick = (itemKey: string, currentValue: string) => {
        setEditingItemKey(itemKey);
        setEditedValue(currentValue);
        setError(null); 
    };

    const handleSaveClick = (itemKey: string) => {
        
        try {
            JSON.parse(editedValue); 
            onEdit(itemKey, editedValue);
            setEditingItemKey(null);
            setError(null);
        } catch {
            setError('Invalid JSON format. Please correct the JSON and try again.');
        }
    };

    return (
        <div className="item-list">
            {items.map((item) => {
                const parsedValue = JSON.parse(item.value);
                const isEditing = editingItemKey === item.key;

                return (
                    <div key={item.key} className="item">
                        <h3>{item.key}</h3>
                        <div className="item-content">
                            {isEditing ? (
                                <>
                                    <textarea
                                        value={editedValue}
                                        onChange={(e) => setEditedValue(e.target.value)}
                                        rows={5}
                                    />
                                    {error && <p className="error-message">{error}</p>}
                                </>
                            ) : (
                                <div>{typeof parsedValue === 'object' ? renderObject(parsedValue) : parsedValue}</div>
                            )}
                        </div>
                        <div className="item-actions">
                            {isEditing ? (
                                <button onClick={() => handleSaveClick(item.key)}>Save</button>
                            ) : (
                                <button onClick={() => handleEditClick(item.key, item.value)}>Edit</button>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;
