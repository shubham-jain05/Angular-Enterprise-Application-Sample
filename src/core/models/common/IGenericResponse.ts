export interface IGenericResponse<T> {
  active?: number;
  deActive?: number;
  Data?: T | any;
  data?: T | any;
  message?: string;
  statusCode?: number;
  successful?: boolean;
  Total?: number;
  PageIndex?: number;
  PageSize?: number;
  PageCount?: number;
  Errors?: Array<IValidationError>;
}
interface IValidationError {
  field: string;
  message: string;
}
