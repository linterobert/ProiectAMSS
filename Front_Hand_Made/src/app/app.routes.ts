import { Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { ProductComponent } from './Product/product/product.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { PostProductComponent } from './Product/post-product/post-product.component';
import { ProductPageComponent } from './Product/product-page/product-page.component';
import { RegisterComponent } from './Auth/register/register.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "product", component: ProductComponent},
    {path: "products", component: ProductListComponent},
    {path: "post-product", component: PostProductComponent},
    {path: "product/:id", component: ProductPageComponent}
];
