import { Routes } from '@angular/router';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';
import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component';

export const routes: Routes = [

    {
        
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadComponent: ()=> import('./domains/products/pages/list/list.component')
                
            },

            {
                path: 'about',
                loadComponent: ()=> import('./domains/info/pages/about/about.component')
            },

            {
                path: 'product/:id',
                component: ProductDetailComponent
            }
        ],
    },

    {
        path: 'login',
        loadComponent: ()=> import('./domains/auth/login/login.component')
    },

    {
        path: '**',
        component: NotFoundComponent
    }
];
