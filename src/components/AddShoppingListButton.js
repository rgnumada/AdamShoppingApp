import React, { useState } from "react";

const AddShoppingListButton = ({ onClick }) => {
  const [listName, setListName] = useState("");

  const handleAdd = () => {
    if (listName.trim()) {
      onClick(listName); // Předává název seznamu zpět
      setListName(""); // Resetuje vstupní pole
    }
  };

  return (
    <div className="add-list-container">
      <input
        type="text"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        placeholder="Zadejte název seznamu"
        className="add-list-input"
      />
      <button onClick={handleAdd} className="add-button">
        + Přidat nový seznam
      </button>
    </div>
  );
};

export default AddShoppingListButton;
