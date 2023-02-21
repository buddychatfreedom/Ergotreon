import React from 'react';

function Input({ label, name, type, value, onChange }) {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
