import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShoppingListOverview = ({ shoppingLists, currentUser, onAddShoppingList, onChangeUser, availableUsers }) => {
  const [newListName, setNewListName] = useState("");
  const [selectedUser, setSelectedUser] = useState(currentUser);
  const navigate = useNavigate();

  const handleCreateList = () => {
    if (newListName.trim() === "") return;
    onAddShoppingList(newListName);
    setNewListName("");
  };

  const handleUserChange = (event) => {
    const newUser = event.target.value;
    setSelectedUser(newUser);
    onChangeUser(newUser);
  };

  return (
    <div className="overview-container">
      <div className="header">
        <div className="user-info">
          <label htmlFor="user-select">Přihlášený uživatel:</label>
          <select
            id="user-select"
            value={selectedUser}
            onChange={handleUserChange}
            className="user-select"
          >
            {availableUsers.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
        <h1>Nákupní seznamy</h1>
        <div className="add-list-container">
          <input
            type="text"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            placeholder="Zadejte název seznamu"
            className="input-field"
          />
          <button onClick={handleCreateList} className="add-button">
            Přidat nový seznam
          </button>
        </div>
      </div>
      <div className="list-grid">
        {shoppingLists.map((list) => (
          <div
            key={list.id}
            className="list-card"
            onClick={() => navigate(`/detail/${list.id}`)}
          >
            <h3>{list.name}</h3>
            <p>Počet členů: {list.members.length}</p>
            <p>Počet položek: {list.items.length}</p>
            {!list.members.includes(currentUser) && (
              <p className="not-member-warning">Nejste členem tohoto seznamu</p>
            )}
            <div className="view-button">Zobrazit seznam</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingListOverview;
