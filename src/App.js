import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ShoppingListOverview from "./components/ShoppingListOverview";
import ShoppingListDetail from "./components/ShoppingListDetail";

const App = () => {
  const [currentUser, setCurrentUser] = useState("Alice");
  const availableUsers = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
  const [shoppingLists, setShoppingLists] = useState([]);

  const handleAddShoppingList = (name) => {
    const newList = {
      id: Date.now(),
      name,
      members: [currentUser],
      items: [],
      owner: currentUser,
    };
    setShoppingLists([...shoppingLists, newList]);
  };

  const handleChangeUser = (newUser) => {
    setCurrentUser(newUser);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ShoppingListOverview
            shoppingLists={shoppingLists}
            currentUser={currentUser}
            onAddShoppingList={handleAddShoppingList}
            onChangeUser={handleChangeUser}
            availableUsers={availableUsers}
          />
        }
      />
      <Route
        path="/detail/:id"
        element={
          <ShoppingListDetail
            findShoppingListById={(id) =>
              shoppingLists.find((list) => list.id.toString() === id)
            }
            updateShoppingList={(updatedList) =>
              setShoppingLists((prevLists) =>
                prevLists.map((list) =>
                  list.id === updatedList.id ? updatedList : list
                )
              )
            }
            currentUser={currentUser}
            availableUsers={availableUsers}
          />
        }
      />
    </Routes>
  );
};

export default App;
