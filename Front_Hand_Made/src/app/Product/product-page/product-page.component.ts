import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Services/product-service';
import { HttpClientModule } from '@angular/common/http';
import { ProductImageService } from '../../Services/product-image-service';
import { MenuComponent } from "../../menu/menu.component";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    CommonModule,
    HttpClientModule,
    MenuComponent
],
  providers: [ProductService, ProductImageService],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit{

  productID: any;

  constructor(   
    private route: ActivatedRoute,
    private productService : ProductService,
    private productImageService: ProductImageService) { }

  ngOnInit(): void {
    this.route.params.forEach(
      param => {
        this.productID = param['id']
    });

    this.productService.GetProduct(this.productID).subscribe(
      (response: any) => {
        this.product.name = response['name'];
        this.product.price = response['price'];
        this.product.description = response['description'];
        this.product.lastUpdated = response['updateTime'];
        
        this.productImageService.GetProductImage(this.productID).subscribe(
          (response2: any) => {
            this.product.image = response2[0]['url'];
            console.log(response2)
          },
          (error) => {
            console.error('Error fetching products:', error);
          } 
        )
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    )
    console.log(this.productID);
  }

  product = {
    name: '',
    price: 0,
    description: '',
    image: '',
    lastUpdated: new Date()
  };
}
