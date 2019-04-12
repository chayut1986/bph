import { Component, OnInit } from '@angular/core';
import { ProductService } from '../api/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProduct().subscribe(
      (products) => {
        console.log(products);
        this.products = products;
      }

    );
  }

}
