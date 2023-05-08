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

  ngOnInit(): void {
    this.http
      .get('https://api.escuelajs.co/api/v1/products')
      .subscribe((data: any) => {
        const response = data as Product[];
        this.products = response.slice(0, 20);
      });
  }
}
