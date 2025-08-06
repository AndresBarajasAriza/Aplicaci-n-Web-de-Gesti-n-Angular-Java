import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ProductList } from './products/product-list/product-list';
import { ProductForm } from './products/product-form/product-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    MatToolbarModule,
    RouterLink,
    ProductList, 
    MatButtonModule,
    ProductForm,
    ProductList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Mis Productos';
  
}
