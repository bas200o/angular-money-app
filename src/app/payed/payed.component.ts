import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
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
    return this.totalPayed() / this.paymentsmap.size;
  }

  amountToRecieve(credit: number): number {
      return credit - this.averageAmount();
  }

  amountToPay(credit: number): number {

      return credit - this.averageAmount();

  }

  whoPaysWho(): Array<string> {

    let whoPays = new Array<string>();
    let klaplopers = new Map<string, number>();
    let geldkoe = new Map<string, number>();
    let ugood: Array<string> = [''];

    for (let entry of this.paymentsmap.entries()) {
      if (entry[1] < this.averageAmount()) {
        klaplopers.set(entry[0], this.averageAmount() - entry[1] );
        console.log(entry[0] + this.amountToPay(entry[1]));
      }

      if (entry[1] > this.averageAmount()) {
        geldkoe.set(entry[0], entry[1] - this.averageAmount());
      }

      if (entry[1] == this.averageAmount()) {
        ugood.push(entry[0]);
      }

    }


    for (let klap of klaplopers.entries()) {

      for (let koe of geldkoe.entries()) {
        if (klap[1] == koe[1]) {
          console.log("equal");

          whoPays.push(klap[0] + ' pays ' + koe[0] + ' €' + klap[1].toPrecision(3));

          klaplopers.delete(klap[0]);
          geldkoe.delete(koe[0]);
        }
        else if (klap[1] > koe[1]){

          console.log("more");
          whoPays.push(klap[0] + ' pays ' + koe[0] + ' €' + koe[1].toPrecision(3));
          geldkoe.delete(koe[0]);

        }
        else if (klap[1] < koe[1]){

          console.log("less");
          whoPays.push(klap[0] + ' pays ' + koe[0] + ' €' + klap[1].toPrecision(3));
          geldkoe.set(koe[0], koe[1] - klap[1]);
          klaplopers.delete(klap[0]);
        }
      }
    }

    return whoPays;
  }
}
