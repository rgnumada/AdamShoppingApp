import React from "react";
import { Link } from "react-router-dom";

const ShoppingListItem = ({ list }) => (
  <li>
    <h2>{list.name}</h2>
    <p>Počet členů: {list.members.length}</p>
    <p>Počet položek: {list.items.length}</p>
    <Link to={`/list/${list.id}`}>Zobrazit detail</Link>
  </li>
);

export default ShoppingListItem;
