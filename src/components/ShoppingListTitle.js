import React, { useState } from "react";

const ShoppingListTitle = ({ title, isOwner, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleSave = () => {
    onEdit(newTitle);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing && isOwner ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleSave}>Uložit</button>
        </>
      ) : (
        <h2>
          {title}
          {isOwner && <button onClick={() => setIsEditing(true)}>Upravit</button>}
        </h2>
      )}
    </div>
  );
};

export default ShoppingListTitle;
