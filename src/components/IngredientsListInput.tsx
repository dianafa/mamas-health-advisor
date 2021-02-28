import React, {useState} from 'react';

// todo: this sould return array of response objects
const getIngredientsInfo = (ingredients: Array<string>): Array<any> => {
  return [];
};


const parseIngredientsInput = (text: string): Array<string> => {
  return [];
};

export const IngredientsListInput = () => {
  const [ingredientsList, setIngredientsList] = useState('');
  // todo: this component should be a dummy input, move this and fetching functions level above
  const [ingredientsInfo, setIngredientsInfo] = useState([]);

  const onClick = (e: any) => {
    e.preventDefault();
    console.log('OONCLICk');

    //parseIngredientsInput();
    // setIngredientsList
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
