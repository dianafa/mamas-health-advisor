import {Result, Status} from '../types/Result';

export const KnowledgeBaseClient = {
  getIngredientInfo: (ingredient: string): Result => {
    return {
      uuid: '5' + ingredient,
      status: Status.GREEN,
      description: 'blabla'
    }
  }
}
