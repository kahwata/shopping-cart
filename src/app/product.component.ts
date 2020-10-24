import { Component, Input } from '@angular/core';
@Component({
  selector: 'product',
  template: `
  <div>{{product.name}}/<div><button>+</button>
  <div>{{product.price}}/<div>
  `,
  styles: [`:host{border: 1px solid blue;}]`]
})
export class ProductComponent  {
  @Input() product: any;
}
// also lets modify the template of
// parent "ProductList" to use "product"
 <poduct *ngFor="let product of products" [product]="product">
 </product>
