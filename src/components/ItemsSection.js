import React, { useState } from "react";

const ItemsSection = ({ items, onAddItem, onRemoveItem, onToggleResolved }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleAddItem = () => {
    if (newItemName.trim() === "") {
      alert("Název položky nesmí být prázdný.");
      return;
    }
    onAddItem(newItemName);
    setNewItemName("");
  };

  return (
    <div className="items-section">
      <h3>Položky</h3>
      <div className="add-item-container">
        <input
          type="text"
          placeholder="Zadejte název položky"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          className="input-field"
        />
        <button onClick={handleAddItem} className="add-button">
          Přidat položku
        </button>
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className={`item ${item.resolved ? "resolved" : ""}`}
        >
          <span>{item.name}</span>
          <div>
            <button
              onClick={() => onToggleResolved(item.id)}
              className={`resolve-button ${
                item.resolved ? "unresolved" : "resolved"
              }`}
            >
              {item.resolved ? "Nevyřešeno" : "Vyřešeno"}
            </button>
            <button
              onClick={() => onRemoveItem(item.id)}
              className="remove-button"
            >
              Odebrat
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsSection;
