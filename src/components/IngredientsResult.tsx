import React from 'react';
import {Result} from '../types/Result';

export const IngredientsResult = ({results} : {results: Array<Result>}) => {
  return (
    <>
      {results.length > 0 && <h2>Your results</h2>}
      {results.map((result: Result) => <div key={result.uuid}>
        <b>Status:</b> {result.status}
        <b>Description:</b> {result.description}
      </div>)}
    </>
  );
}
