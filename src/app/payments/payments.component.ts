import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  payMap = new Map<string,number>();

  constructor() { 

    this.payMap.set("Kees Visser", 22.69);
    this.payMap.set("John Doe", 10.42);
    this.payMap.set("Jan de Man", 13.37);

  }

  ngOnInit(): void {
  }

  addPayment(k, v) : void {
    if(this.payMap.has(k))
    {
      this.payMap.set(k,this.payMap.get(k).valueOf() + v);
      return;
    }

    this.payMap.set(k,v);
  }

  getpayments(): Map<string,number>{
    return this.payMap;
  }

}
