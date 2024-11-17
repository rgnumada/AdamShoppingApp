import React, { useState } from "react";

const AddItemButton = ({ onClick }) => {
  const [itemName, setItemName] = useState("");

  const handleAdd = () => {
    if (itemName.trim()) {
      onClick(itemName); // Přidá novou položku
      setItemName(""); // Vyprázdní vstupní pole
    }
  };

  return (
    <div className="add-item-container">
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Zadejte název položky"
        className="add-item-input"
      />
      <button onClick={handleAdd} className="add-button">
        + Přidat položku
      </button>
    </div>
  );
};

export default AddItemButton;
