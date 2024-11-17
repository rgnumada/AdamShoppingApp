import React from "react";

const MemberItem = ({ member, isRemovable, onRemove }) => (
  <li className="list-item">
    {member}
    {isRemovable && (
      <button onClick={() => onRemove(member)}>Odebrat</button>
    )}
  </li>
);

export default MemberItem;
