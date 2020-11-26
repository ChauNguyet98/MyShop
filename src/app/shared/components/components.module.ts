import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { CardProductComponent } from './card-product/card-product.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [MenuComponent, CardProductComponent, CarouselComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
