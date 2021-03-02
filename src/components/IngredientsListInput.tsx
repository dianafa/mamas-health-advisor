import React, {useState} from 'react';

const parseIngredientsInput = (text: string): Array<string> => {
  return text.split(',').map(ingredient => ingredient.trim());
};

export const IngredientsListInput = ({onSubmit}: {onSubmit: any}) => {
  const [inputText, setInputText] = useState('');
  const handleSubmit = (event: any) => {
    event.preventDefault();

    onSubmit(parseIngredientsInput(inputText));
  };

  const handleChange = (event: any) => {
    setInputText(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ingredients:
        <input type="text" value={inputText} onChange={handleChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>);
};
