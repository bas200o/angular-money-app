import { Component, OnInit } from '@angular/core';
import { PaymentsComponent } from '../payments/payments.component';

@Component({
  selector: 'app-payed',
  templateUrl: './payed.component.html',
  styleUrls: ['./payed.component.css']
})
export class PayedComponent implements OnInit {

  constructor(    
    public payment: PaymentsComponent
    ) { }

  ngOnInit(): void {

  }

  paymentsmap = this.payment.getpayments();

  totalPayed(): number {
    var total = 0.0;
    this.payment.getpayments().forEach(element => {
      total += element.valueOf();
    });

    return total;
  }
  
  averageAmount(): number {
    return this.totalPayed()/this.paymentsmap.size;
  }

}
