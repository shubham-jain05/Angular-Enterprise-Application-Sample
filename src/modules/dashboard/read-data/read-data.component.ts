import { Component, OnInit } from '@angular/core';
import { GetUser } from '../store/lr.action';
import { Store, Select } from '@ngxs/store';
import { Subscription, Observable } from 'rxjs';
import { LrState } from '../store/lr.state';
import { IUser } from 'src/core/models/common/IUser';

@Component({
  selector: 'app-read-data',
  templateUrl: './read-data.component.html',
  styleUrls: ['./read-data.component.scss'],
})
export class ReadDataComponent implements OnInit {
  // comman varible
  userSubscription: Subscription;
  user: IUser[] = [];
  filterUser: IUser[] = [];

  // select state of user and load
  @Select(LrState.getUsers) users: Observable<IUser[]>;
  @Select(LrState.loading) loading: Observable<boolean>;

  constructor(private readonly store: Store) {}

  ngOnInit() {
    // subscribe user data
    this.userSubscription = this.users.subscribe(
      (data) => {
        if (data[0] !== undefined) {
          this.user = data;
          this.filterUser = data;
        }
      },
      (error: string) => {
        // handel error
      }
    );
    // call user state
    this.store.dispatch(new GetUser());
  }

  ngOnDestroy() {
    // destroy old observable
    this.userSubscription.unsubscribe();
  }

  // elper function for search
  search(term: string) {
    if (!term) {
      this.filterUser = this.user;
    } else {
      this.filterUser = this.user.filter(
        (x) =>
          x.username.trim().toLowerCase().includes(term.trim().toLowerCase()) ||
          x.note.trim().toLowerCase().includes(term.trim().toLowerCase())
      );
    }
  }
}
