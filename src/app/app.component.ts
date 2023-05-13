import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular E-commerce';
  http = inject(HttpClient);
  products: Product[] = [];
  banners = [
    {
      title: 'summer statements',
      path: '#',
      image_url:
        'https://www.wolfcircus.com/cdn/shop/files/summerpendantlongbanner_2048x2048.png?v=1683819152',
    },
    {
      title: 'core collection',
      path: '#',
      image_url:
        'https://www.wolfcircus.com/cdn/shop/files/coreearringsbannerlong_2048x2048.png?v=1681330605',
    },
    {
      title: 'charm collection',
      path: '#',
      image_url:
        'https://www.wolfcircus.com/cdn/shop/files/finalbanner1_2048x2048.png?v=1679518444',
    },
  ];

  ngOnInit(): void {
    this.http
      .get('https://api.escuelajs.co/api/v1/products')
      .subscribe((data: any) => {
        const response = data as Product[];
        this.products = response.slice(0, 20);
      });
  }
}
