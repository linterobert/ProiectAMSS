import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../Services/product-service';
import { Observable } from 'rxjs';
import { getProduct } from '../../Interfaces/get-product';
import { MenuComponent } from "../../menu/menu.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, HttpClientModule, MenuComponent],
  providers: [ProductService],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.GetProducts().subscribe(
      (response: any) => {
        this.products = response;
        console.log(this.products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  products! : any[];
}
