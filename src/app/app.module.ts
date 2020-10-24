import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list.component";
import { ShoppingCartComponent } from "./shopping-cart.component";
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ShoppingCartComponent, ProductListComponent /*also here*/],
  bootstrap: [AppComponent]
})
export class AppModule {
  productList = [
    { name: "Z900", price: 8799 },
    { name: "shubert helmet", price: 999 },
    { name: "sport gloves", price: 99 }
  ];
  cartProductList = [];
}
