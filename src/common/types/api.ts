export enum ResponseStateEnum {
  OK = 'ok',
  ERROR = 'error',
}

export interface IResponseBase {
  result: ResponseStateEnum;
  error: string;
}