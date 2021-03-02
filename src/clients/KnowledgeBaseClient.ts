import dataSource from '../data-source/data';
import {IngredientInfo} from '../types/IngredientInfo';
import {LookupResult} from '../types/LookupResult';

export const KnowledgeBaseClient = {
  getIngredientInfo: (ingredient: string): IngredientInfo | null => {
    const lookup: {[index: string]: string} = dataSource.lookup;
    const productData: {[index: string]: LookupResult} = dataSource.productData;
    const id: string = lookup[ingredient];
    if (!id) {
      return null;
    }

    const result: LookupResult = productData[id];

    return {
      uuid: id,
      name: ingredient,
      status: result.status,
      description: result.description
    }
  }
}
