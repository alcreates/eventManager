import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'venuecard',
  templateUrl: './venuecard.component.html',
  styleUrls: ['./venuecard.component.css']
})
export class VenuecardComponent implements OnInit {
  @Input('venueInfo') venueInfo;

  // @Input('product') product: Product;
  // // tslint:disable-next-line:no-input-rename
  // @Input('show-actions') showActions = true;
  // // tslint:disable-next-line:no-input-rename
  // @Input('shopping-cart') shoppingCart: ShoppingCart;

  // @Input('inProductPage') inProductPage = true;


  constructor() { }

  ngOnInit() {
  }

}
