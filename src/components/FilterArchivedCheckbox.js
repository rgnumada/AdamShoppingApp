import React from "react";

const FilterArchivedCheckbox = ({ checked, onChange }) => (
  <div>
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      Zobrazit archivované
    </label>
  </div>
);

export default FilterArchivedCheckbox;
