import React from 'react';

const parseIngredientsInput = (text: string): Array<string> => {
  return text.split(',');
};

export const IngredientsListInput = ({onSubmit}: {onSubmit: any}) => {
  const onClick = (e: any) => {
    e.preventDefault();
    console.log('OONCLICk');

    onSubmit(parseIngredientsInput('TODO, todooooo'));
  };

  return (
    <form>
      <label>
        Ingredients:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" onClick={onClick} />
    </form>);
};
