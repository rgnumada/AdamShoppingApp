import React, { useState } from "react";

const MembersSection = ({ members, isOwner, availableUsers, onAddMember, onRemoveMember, currentUser }) => {
  const [selectedUser, setSelectedUser] = useState("");

  const handleAddMember = () => {
    if (selectedUser && !members.includes(selectedUser)) {
      onAddMember(selectedUser);
      setSelectedUser("");
    }
  };

  return (
    <div className="members-section">
      <h3>Členové</h3>
      <ul>
        {members.map((member) => (
          <li key={member} className="member-item">
            {member}
            {member === currentUser ? (
              <button onClick={() => onRemoveMember(member)} className="remove-button">
                Odebrat sebe
              </button>
            ) : isOwner ? (
              <button onClick={() => onRemoveMember(member)} className="remove-button">
                Odebrat
              </button>
            ) : null}
          </li>
        ))}
      </ul>
      {isOwner && (
        <div className="add-member-container">
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="input-field"
          >
            <option value="">--Vyberte člena--</option>
            {availableUsers.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
          <button onClick={handleAddMember} className="add-button">
            Přidat člena
          </button>
        </div>
      )}
    </div>
  );
};

export default MembersSection;
