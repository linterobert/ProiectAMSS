import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInterface } from '../Interfaces/login-interface';
import { Observable } from 'rxjs';
import { getProduct } from '../Interfaces/get-product';

@Injectable({ // Adaugă acest decoratori pentru a face clasa injectabilă
  providedIn: 'root', // Acesta face serviciul disponibil în întreaga aplicație
})
export class ProductImageService {
  constructor(private httpClient: HttpClient) {}
  
  GetProductImage(productId: number) {
    // Asigură-te că endpoint-ul returnează o listă de produse
    return this.httpClient.get(`https://localhost:7091/api/ProductImage/ProductID/${productId}`);
  }

  PostProductImage(image: any) {
    return this.httpClient.post('https://localhost:7091/api/ProductImage', image);
  }
  //GetProducts() {
    //return this.httpClient.get('https://localhost:7091/api/Product');
  //}
}
