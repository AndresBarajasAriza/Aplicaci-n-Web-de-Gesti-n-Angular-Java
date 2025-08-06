import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { product } from './product';
import { DecimalPipe } from '@angular/common';


const ELEMENT_DATA: product[] = [
  {id: 1, name: "Laptop", description: "Gaming Laptop", price: 1200, quantity: 5},
  {id: 2, name: "Keyboard", description: "Retro-lighted keyboard", price: 80, quantity: 15},
  {id: 3, name: "Mouse Wireless", description: "Ergonomic Mouse", price: 35, quantity: 20},
];

@Component({
  selector: 'app-product-list',
  imports: [MatTableModule, DecimalPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList { 
  displayedColumns: string[] = ['name', 'description', 'price'];
  dataSource = ELEMENT_DATA;

}

