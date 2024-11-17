import React, { useState } from "react";

const AddMemberButton = ({ onClick }) => {
  const [memberName, setMemberName] = useState("");

  const handleAdd = () => {
    if (memberName.trim()) {
      onClick(memberName); // Předává jméno člena do callbacku
      setMemberName(""); // Vyprázdní vstupní pole
    }
  };

  return (
    <div className="add-member-container">
      <input
        type="text"
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
        placeholder="Zadejte jméno člena"
        className="add-member-input"
      />
      <button onClick={handleAdd} className="add-button">
        + Přidat člena
      </button>
    </div>
  );
};

export default AddMemberButton;
