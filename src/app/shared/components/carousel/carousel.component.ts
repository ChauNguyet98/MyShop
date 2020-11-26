import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {

  array = ['./assets/img/banner/banner-1.jpg', './assets/img/banner/banner-2.jpg', './assets/img/banner/banner-3.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}
