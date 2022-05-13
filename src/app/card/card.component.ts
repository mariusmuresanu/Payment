import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  profileForm = new FormGroup({
    fullName: new FormControl(''),
    cardNumber: new FormControl(''),
    expDate: new FormControl(''),
    cvcNumber: new FormControl('')

  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  // updateName() {
  //   this.name.setValue('Nancy');
  // }
}
