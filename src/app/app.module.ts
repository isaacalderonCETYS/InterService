import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RoundedImageComponent } from './components/rounded-image/rounded-image.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { TermsPageComponent } from './components/terms-page/terms-page.component';
import { StoreCardComponent } from './components/store-card/store-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    RoundedImageComponent,
    ProductsPageComponent,
    ProfilePageComponent,
    CartPageComponent,
    AboutUsPageComponent,
    TermsPageComponent,
    StoreCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCoffee);
    library.addIcons(faFacebook);
  }
}
