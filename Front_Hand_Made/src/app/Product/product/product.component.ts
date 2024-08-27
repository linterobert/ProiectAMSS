import { Component, Input, OnInit } from '@angular/core';
import { getProduct } from '../../Interfaces/get-product';
import { ProductService } from '../../Services/product-service';
import { ProductImageService } from '../../Services/product-image-service';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from "../../menu/menu.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HttpClientModule, MenuComponent],
  providers: [ProductService, ProductImageService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  constructor(private productService: ProductService,
    private productImageService: ProductImageService
  ) { }

  ngOnInit(): void {
    this.productImageService.GetProductImage(this.product.productID).subscribe(
      (rez: any) => {
        if(rez[0]['url']) {
          this.url = rez[0]['url'];
        } else { 
          this.url = 'https://via.placeholder.com/300x200'
        }
      },
      error => {
         this.url = 'https://via.placeholder.com/300x200'
      }
    )
    if(this.url == undefined) {
      this.url = 'https://via.placeholder.com/300x200'
    }
    console.log(this.product);
  }
  @Input() product!: any;
  url!: string;
}
