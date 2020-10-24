import { Component, Input } from "@angular/core";

@Component({
  selector: 'product-list',
  template: `
    <h1>Products List</h1>
    <div *ngFor="let product of products">
      {{ product.name }}
      <div></div>
    </div>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class ProductListComponent {
  @Input() products: any[];
}
