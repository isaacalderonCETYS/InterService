import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component'
import {ProductsPageComponent} from './components/products-page/products-page.component'
import {ProfilePageComponent} from './components/profile-page/profile-page.component'
import {CartPageComponent} from './components/cart-page/cart-page.component'
import {AboutUsPageComponent} from './components/about-us-page/about-us-page.component'
import {TermsPageComponent} from './components/terms-page/terms-page.component'
import {BuyPageComponent} from './components/buy-page/buy-page.component'

const routes: Routes = [
  {path: '', component:HomePageComponent},
  {path: 'products', component:ProductsPageComponent},
  {path: 'profile', component:ProfilePageComponent},
  {path: 'cart', component:CartPageComponent},
  {path: 'about-us', component:AboutUsPageComponent},
  {path: 'terms', component:TermsPageComponent},
  {path: 'buy/:id', component:BuyPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
