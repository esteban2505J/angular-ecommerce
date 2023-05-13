import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgOptimizedImage } from '@angular/common';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
