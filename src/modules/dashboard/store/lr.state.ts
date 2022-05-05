import { State, Action, StateContext, Selector } from '@ngxs/store';
import { IUser } from '../../../core/models/common/IUser'; // use custom model or interface
import {
  AddUser, // use custom action
} from './lr.action';

// app state model for user
export class LrStateModel {
  users: IUser[];
  loading: boolean;
}

// empty state
@State<LrStateModel>({
  name: 'users',
  defaults: {
    users: [],
    loading: true,
  },
})
export class LrState {
  // selector for user
  @Selector()
  static getUsers(state: LrStateModel) {
    return state.users;
  }

  // selector for load state
  @Selector()
  public static loading(state: LrStateModel) {
    return state.loading;
  }

  // action for save user
  @Action(AddUser)
  AddUser(
    { getState, patchState }: StateContext<LrStateModel>,
    { payload }: AddUser
  ) {
    const state = getState();
    patchState({
      users: [...state.users, payload],
      loading: false,
    });
  }
}
