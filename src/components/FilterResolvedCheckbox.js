import React from "react";

const FilterResolvedCheckbox = ({ checked, onChange }) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      Zobrazit vyřešené položky
    </label>
  </div>
);

export default FilterResolvedCheckbox;
