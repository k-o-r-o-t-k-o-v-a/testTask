import './Checkbox.scss';
import React, { useState } from 'react';

function Checkbox({
  disabled,
  id,
  onClick,
  label,
  style
}) {
  const [isChecked, setIsChecked] = useState(false);

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
          onChange={() => setIsChecked(prev => !prev)}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}

export default Checkbox;
