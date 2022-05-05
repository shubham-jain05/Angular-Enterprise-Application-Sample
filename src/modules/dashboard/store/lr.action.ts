import { IUser } from '../../../core/models/common/IUser';

// action for save user
export class AddUser {
  static readonly type = '[USER] Add';
  constructor(public payload: IUser) {}
}

// action for get user
export class GetUser {
  static readonly type = '[USER] Get';
}
