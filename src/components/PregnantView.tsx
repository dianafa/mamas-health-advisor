import React, {useState} from 'react';
import {KnowledgeBaseClient} from '../clients/KnowledgeBaseClient';
import {Result} from '../types/Result';
import {IngredientsResult} from './IngredientsResult';
import {IngredientsListInput} from './IngredientsListInput';

export const PregnantView = () => {
  const [ingredientsInfo, setIngredientsInfo] = useState<Result[]>([]);

  const getIngredientsInfo = (ingredients: Array<string>): void => {
    const result = ingredients.map(ingredient => {
      return KnowledgeBaseClient.getIngredientInfo(ingredient);
    });

    setIngredientsInfo(result);
  };

  return (
    <>
      <IngredientsListInput onSubmit={getIngredientsInfo} />
      <IngredientsResult results={ingredientsInfo}/>
    </>
  );
};
