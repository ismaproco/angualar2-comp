import { Component, Input } from '@angular/core';


@Component({
  selector: 'bid-component',
  styles: [`
  `],
  template: `
    <span class="value">{{price}}</span>
    <span class="amount {{selectedClass}}">{{amount}}</span>
  `
})
export class BidsComponent {

  @Input() price:number = 50;
  @Input() amount:number = 50; 
  @Input() selectedClass:string = '';

  constructor( ) {

  }

  ngOnInit() {
    
  }
}
