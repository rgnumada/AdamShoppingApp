import React from "react";

const Item = ({ item, onToggleResolved }) => (
  <li className={`list-item ${item.resolved ? "resolved" : ""}`}>
    {item.name}
    <button onClick={() => onToggleResolved(item.id)}>
      {item.resolved ? "Zrušit vyřešení" : "Označit jako vyřešené"}
    </button>
  </li>
);

export default Item;
