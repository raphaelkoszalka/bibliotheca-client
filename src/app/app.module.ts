import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { AppRoutingModule } from './app.routes.mod';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';

import { provideConfig } from './app.constants';

import { BroadcasterService } from './services/broadcaster.service';
import { UserService } from './components/user/user.service';
import { HomeComponent } from './components/home/home.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book/book.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { QueryBuilderService } from './services/query-builder.service';
import { HomeResolver } from './components/home/home.resolver';
import { HomeService } from './components/home/home.service';
import { BookCardComponent } from './components/book-card/book-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    HomeComponent,
    BookListComponent,
    BookComponent,
    CheckoutComponent,
    FooterComponent,
    ShoppingCartComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    AppRoutingModule
  ],
  providers: [
    BroadcasterService,
    { provide: AuthServiceConfig, useFactory: provideConfig },
    UserService,
    QueryBuilderService,
    HomeResolver,
    HomeService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
