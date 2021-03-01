export enum Status {
  INVALID = -1,
  GREEN,
  YELLOW,
  RED,
  UNRESEARCHED
}

export type Result = {
  uuid: string,
  status: Status,
  description: string
}

