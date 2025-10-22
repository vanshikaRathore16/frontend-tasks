import { Routes } from '@angular/router';
import { Product } from './product/product';
import { App } from './app';

export const routes: Routes = [
    {path : "",component : App},
    {path : "product", component : Product}
];
