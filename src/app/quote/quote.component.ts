import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'You dont respond to mosquito bite with a hummer', 'Choose the right tool for the job'),
    // tslint:disable-next-line: max-line-length
    new Quote(2, 'Better late than never', 'Bora ufike'),

    new Quote(3, 'Better late than never', 'Bora ufike')
  ]

  toggleDetails(index){
    this.quotes[index].showDetails =!this.quotes[index].showDetails;
  }

  completeQuote(isComplete,index){
    if (isComplete){
      this.quotes.splice(index,1);
    }
  }
  constructor() {}

  ngOnInit() {}
}
