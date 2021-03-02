import React, {useState} from 'react';
import {Button, TextField} from '@material-ui/core';
import './IngredientsListInput.css';

const parseIngredientsInput = (text: string): Array<string> => {
  return text.split(',').map(ingredient => ingredient.trim());
};

export const IngredientsListInput = ({onSubmit}: { onSubmit: any }) => {
  const [inputText, setInputText] = useState('');
  const handleSubmit = (event: any) => {
    event.preventDefault();

    onSubmit(parseIngredientsInput(inputText));
  };

  const handleChange = (event: any) => {
    setInputText(event.target.value);
  };

  return (
    <div className="ingredient-list-input">
    <form className="ingredient-list-input-form" onSubmit={handleSubmit}>
      <TextField
        id="outlined-multiline-static"
        label="Ingredients"
        multiline
        rows={4}
        variant="outlined"
        value={inputText}
        onChange={handleChange}
      />
      <Button id="ingredient-list-submit-button" type="submit" variant="contained" color="primary">Submit</Button>
    </form>
    </div>);
};
