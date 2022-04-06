import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { PaymentsComponent } from '../payments/payments.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})



export class InputComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(
    private formBuilder: FormBuilder,
    public payment: PaymentsComponent
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
    return '';
  }

  


  onReset(): void {
    this.SumbitForm.reset();
  }

  onSubmit(): void {
    this.payment.addPayment(this.SumbitForm.controls['name'].value, this.SumbitForm.controls['amount'].value);
  }
}
