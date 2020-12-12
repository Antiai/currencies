export enum ResponseStateEnum {
  OK = 'ok',
  ERROR = 'error',
}

export interface ResponseBase {
  result: ResponseStateEnum;
  error: string;
}