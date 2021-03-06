import React, {useState} from 'react';
import {KnowledgeBaseClient} from '../clients/KnowledgeBaseClient';
import {IngredientsResult} from './IngredientsResult';
import {IngredientsListInput} from './IngredientsListInput';
import {IngredientInfo} from '../types/IngredientInfo';

export const PregnantView = () => {
  const [ingredientsInfo, setIngredientsInfo] = useState<IngredientInfo[]>([]);

  const getIngredientsInfo = (ingredients: Array<string>): void => {
    const uniqueIngredients: Array<string> = [...new Set(ingredients)];
    const result: Array<IngredientInfo> = uniqueIngredients
      .map(ingredient => KnowledgeBaseClient.getIngredientInfo(ingredient))
      .flatMap(info => info ? [info] : []);

    setIngredientsInfo(result);
  };

  return (
    <>
      <IngredientsListInput onSubmit={getIngredientsInfo} />
      <IngredientsResult results={ingredientsInfo} />
    </>
  );
};
