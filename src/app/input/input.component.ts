import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})



export class InputComponent implements OnInit {
  ngOnInit(): void {
  }
  temp = "temp";
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  SumbitForm = this.formBuilder.group({
    name: '',
    amount: ''
  });

  amount = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required, Validators.minLength(4)]);

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.amount.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.name.hasError('minLength')) {
      return 'You must enter a longer name';
    }
  }

  onReset(): void {
    this.SumbitForm.reset();
  }

  onSubmit(): void {
    this.temp = this.SumbitForm.value;
    this.SumbitForm.reset();
  }

}
