export enum Status {
  INVALID = -1,
  GREEN,
  YELLOW,
  RED,
  UNRESEARCHED
}

export type IngredientInfo = {
  uuid: string,
  name: string,
  status: Status,
  description: string
}

