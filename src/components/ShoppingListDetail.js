import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MembersSection from "./MembersSection";
import ItemsSection from "./ItemsSection";

const ShoppingListDetail = ({ findShoppingListById, updateShoppingList, currentUser, availableUsers }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [list, setList] = useState(() => {
    const existingList = findShoppingListById(id);
    return existingList || { id: parseInt(id), name: "Nový seznam", members: [], items: [], owner: currentUser };
  });

  useEffect(() => {
    // Pokud byl uživatel odebrán ze seznamu, přesměrujeme ho na hlavní stránku
    if (!list.members.includes(currentUser)) {
      updateShoppingList(list); // Uložíme změny do globálního stavu
      navigate("/");
    }
  }, [list.members, currentUser, navigate, updateShoppingList]);

  const handleAddMember = (memberName) => {
    setList({ ...list, members: [...list.members, memberName] });
  };

  const handleRemoveMember = (memberName) => {
    const updatedMembers = list.members.filter((member) => member !== memberName);
    setList({ ...list, members: updatedMembers });

    // Pokud uživatel odebere sám sebe, přesměrujeme na hlavní stránku
    if (memberName === currentUser) {
      updateShoppingList({ ...list, members: updatedMembers }); // Uložíme změny
      navigate("/");
    }
  };

  const isOwner = list.owner === currentUser;

  return (
    <div className="detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Zpět
      </button>
      <h1>{list.name}</h1>
      <MembersSection
        members={list.members}
        isOwner={isOwner}
        availableUsers={availableUsers.filter((user) => !list.members.includes(user))}
        onAddMember={handleAddMember}
        onRemoveMember={handleRemoveMember}
        currentUser={currentUser}
      />
      <ItemsSection
        items={list.items}
        onAddItem={(itemName) => setList({ ...list, items: [...list.items, { id: Date.now(), name: itemName, resolved: false }] })}
        onRemoveItem={(itemId) => setList({ ...list, items: list.items.filter((item) => item.id !== itemId) })}
        onToggleResolved={(itemId) =>
          setList({
            ...list,
            items: list.items.map((item) =>
              item.id === itemId ? { ...item, resolved: !item.resolved } : item
            ),
          })
        }
      />
      <button
        onClick={() => {
          updateShoppingList(list);
          navigate("/");
        }}
        className="save-button"
      >
        Uložit
      </button>
    </div>
  );
};

export default ShoppingListDetail;
