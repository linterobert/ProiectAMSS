import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInterface } from '../Interfaces/login-interface';
import { Observable, retry } from 'rxjs';
import { getProduct } from '../Interfaces/get-product';

@Injectable({ // Adaugă acest decoratori pentru a face clasa injectabilă
  providedIn: 'root', // Acesta face serviciul disponibil în întreaga aplicație
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  GetProduct(id: number) {
    return this.httpClient.get(`https://localhost:7091/api/Product/${id}`);
  }
  GetProducts() {
    // Asigură-te că endpoint-ul returnează o listă de produse
    return this.httpClient.get('https://localhost:7091/api/Product');
  }

  PostProduct(product: any) {
    return this.httpClient.post('https://localhost:7091/api/Product', product);
  }
  //GetProducts() {
    //return this.httpClient.get('https://localhost:7091/api/Product');
  //}
}
