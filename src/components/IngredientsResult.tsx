import React from 'react';
import {IngredientInfo} from '../types/IngredientInfo';

export const IngredientsResult = ({results} : {results: Array<IngredientInfo>}) => {
  return (
    <>
      {results.length > 0 && <h2>Your results</h2>}
      {results.map((info: IngredientInfo) => <div key={info.uuid}>
        <b>Name:</b> {info.name}
        <b>Status:</b> {info.status}
        <b>Description:</b> {info.description}
      </div>)}
    </>
  );
}
