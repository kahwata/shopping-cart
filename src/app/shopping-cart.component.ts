import { Component, Input } from "@angular/core";
@Component({
  selector: "shopping-cart",
  template: `
    <h1>Shopping Cart</h1>
    <div *ngFor="let product of products">
      {{ product.name }}
      <div></div>
    </div>
  `,
  styles: [
    `
      :host {
        border: 1px solid #000;
      }
    `
  ]
})
export class ShoppingCartComponent {
  @Input() products: any[];
}
