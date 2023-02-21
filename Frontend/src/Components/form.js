import React, { useState } from 'react';

function Form({ onSubmit, children }) {
  const [formState, setFormState] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(formState);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          onChange: handleChange,
          value: formState[child.props.name] || '',
        });
      })}
      <Button type="submit" label="Submit" />
    </form>
  );
}

export default Form;
