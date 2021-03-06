import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModule } from './modules/account/account.module';
import { AsideModule } from './modules/aside/aside.module';
import { HomeModule } from './modules/home/home.module';
import { BookModule } from './modules/book/book.module';
import { FavouritesModule } from './modules/favourites/favourites.module';
import { LoginModule } from './modules/login/login.module';
import { CoreModule } from './core/core.module';
import { OptionsModule } from './modules/options/options.module';
import { AuthService } from './core/auth/auth.service';

const MaterialModules = [MatTabsModule];
const PageModules = [
  AccountModule,
  HomeModule,
  BookModule,
  FavouritesModule,
  LoginModule,
  OptionsModule];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    AsideModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ...MaterialModules,
    ...PageModules,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
