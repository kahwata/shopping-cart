import { Component, Input } from '@angular/core';
@Component({
  selector: 'product',
  template: `
   <div>{{product.name}}</div><button>+</button>
  <div>{{product.price}}</div>
  `,
styles:[`
:host {
  display: grid;
  grid-template-columns: 1fr auto;
// change the second "1fr" to "auto"
  grid-column-gap: 10px;
}
div:nth-child(1) {font-weight: bold;}
`]
})
export class ProductComponent  {
  @Input() product: any;
}
// also lets modify the template of
// parent "ProductList" to use "product"
<product *ngFor="let product of products" [product]="product">
 </product>
