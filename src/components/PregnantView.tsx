import React, {useState} from 'react';
import {KnowledgeBaseClient} from '../clients/KnowledgeBaseClient';
import {IngredientsResult} from './IngredientsResult';
import {IngredientsListInput} from './IngredientsListInput';
import {IngredientInfo} from '../types/IngredientInfo';

export const PregnantView = () => {
  const [ingredientsInfo, setIngredientsInfo] = useState<IngredientInfo[]>([]);

  const getIngredientsInfo = (ingredients: Array<string>): void => {
    const result: Array<IngredientInfo> = ingredients
      .flatMap(ingredient => {
        return [KnowledgeBaseClient.getIngredientInfo(ingredient)];
        // todo: why it doesn't understand?
      }) as Array<IngredientInfo>;

      //.filter(ingredientInfo => !!ingredientInfo);

    setIngredientsInfo(result);
  };

  return (
    <>
      <IngredientsListInput onSubmit={getIngredientsInfo} />
      <IngredientsResult results={ingredientsInfo} />
    </>
  );
};
