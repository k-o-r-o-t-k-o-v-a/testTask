import './Input.scss';
import React from 'react';

function Input({
  disabled,
  error,
  errorText,
  onChange,
  placeholder,
  type = 'text',
  value
}) {
  return (
    <form className={`Input${error ? ' error ' : `${disabled ? ' disabled ' : ''}`}`}>
      <input
        className="Input__el"
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {
        error && errorText ? (
          <div className="Input__error">
            {errorText}
          </div>
        ) : null
      }
    </form>
  );
}
export default Input;
