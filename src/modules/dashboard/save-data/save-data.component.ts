import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddUser } from '../store/lr.action';
import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-data',
  templateUrl: './save-data.component.html',
  styleUrls: ['./save-data.component.scss'],
})
export class SaveDataComponent implements OnInit {
  // essential variable
  localForm: FormGroup;
  submitted = false;
  lat: number = 51.673858;
  lng: number = 7.815982;
  locationChosen = false;
  note: string;

  constructor(private readonly fb: FormBuilder, private readonly store: Store) {
    // take current location for user
    if (navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }

  ngOnInit() {
    // set input valadtion
    this.localForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(15)]],
      note: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  // helper function for sset user location
  onChooseLocation($event) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.locationChosen = true;
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.localForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.localForm.invalid) {
      return;
    }

    // set user data in temp. cache
    this.store.dispatch(
      new AddUser({
        username: this.localForm.value.username,
        note: this.localForm.value.note,
        lat: this.lat,
        lng: this.lng,
      })
    );
  }
}
