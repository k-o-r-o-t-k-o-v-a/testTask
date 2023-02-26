import React from 'react';
import './Button.scss';

function Button({
  children,
  disabled,
  load,
  onClick,
  style,
  text,
  variant = 'default' // default || danger

}) {
  return (
    <button
      type="button"
      className={`Button${load ? ' load ' : ''}${disabled ? ' disabled ' : ''} ${variant}`}
      disabled={disabled}
      style={style}
      onClick={onClick}
    >
      {children}
      <div className="Button__text">
        {text}
      </div>
    </button>
  );
}

export default Button;
