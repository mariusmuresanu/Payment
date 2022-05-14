import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Card } from '../models/card';

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

  cards: Card[] =[];

  @ViewChild('name') name?: ElementRef;
  @ViewChild('number') number?: ElementRef;
  @ViewChild('date') date?: ElementRef;
  @ViewChild('cvc') cvc?: ElementRef;
  @ViewChild('primary') primary?: ElementRef;


  

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

  addCard(){
const name = this.name?.nativeElement.value;
const number = this.number?.nativeElement.value;
const date = this.date?.nativeElement.value;
const cvc = this.cvc?.nativeElement.value;
const primary = this.primary?.nativeElement.value;


    //this.cards.push(new Card(name, number, date, cvc, primary));

this.cards = [...this.cards, new Card(name, number, date, cvc, primary)];

  }
}
