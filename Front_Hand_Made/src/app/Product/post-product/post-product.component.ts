import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../Services/product-service';
import { HttpClientModule } from '@angular/common/http';
import { ProductImageService } from '../../Services/product-image-service';
import { error } from 'console';
import { MenuComponent } from "../../menu/menu.component";

@Component({
  selector: 'app-post-product',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
    MenuComponent
],
  providers: [ProductService, ProductImageService],
  templateUrl: './post-product.component.html',
  styleUrl: './post-product.component.scss'
})
export class PostProductComponent {
  constructor(private productService: ProductService,
    private productImageService: ProductImageService
  ) { }
  
  onFileSelected(event: any) {
    this.productImage.url = event.target.files[0].url;
    var reader = new FileReader();
    reader.onload = (event: any) => {
        this.productImage.url = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
    console.log(this.productImage);
  }
  // Define object to store form values
  product = {
    name: '',
    description: '',
    price: null,
    userID: '48eb5909-7465-4ba6-a920-4f0d9b483795'
  };
  productImage = {
    productID: 0,
    url: ''
  }

  // Method to handle form submission
  onSubmit(form: any): void {
    this.productService.PostProduct(this.product).subscribe(
      (response: any) => {
        console.log(this.productImage);
        this.productImage.productID = response['productID'];
        this.productImageService.PostProductImage(this.productImage).subscribe(
          (response2: any) => {
            console.log(response2);
          },
          (error) => {
            console.error('Error fetching products:', error);
          }
        )
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
