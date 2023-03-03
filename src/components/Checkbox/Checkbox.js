import './Checkbox.scss';
import React from 'react';

function Checkbox({
  disabled,
  id,
  onClick,
  label,
  style,
  isChecked,
  onChange
}) {
  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          className={isChecked ? 'checked' : ''}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          id={id}
          onClick={onClick}
          style={style}
          onChange={onChange}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}

export default Checkbox;
