import { Component, Input } from '@angular/core';

import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  content = 'content and more';
  @Input() product!: Product;
}
