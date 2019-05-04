import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'You dont respond to mosquito bite with a hummer', 'Choose the right tool for the job', new Date(2019, 4, 4)),
    // tslint:disable-next-line: max-line-length
    new Quote(2, 'Better late than never', 'Bora ufike', new Date(2019, 2, 16)),

    new Quote(3, 'Better late than never', 'Bora ufike', new Date(2019, 3, 6))
  ]

  toggleDetails(index){
    this.quotes[index].showDetails =!this.quotes[index].showDetails;
  }

  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete = confirm('Are you sureyou want to delete the quote?')
    }
    if (isComplete){
      this.quotes.splice(index,1);
    }
  }
  constructor() {}

  ngOnInit() {}
}
