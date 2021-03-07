import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { homeComponent } from './home/home.component';
import { navbarComponent } from './navbar/navbar.component';
import { searchBarComponent } from './searchbar/searchbar.component';
import { topBannerComponent } from './topbanner/topbanner.component';
import { categoryMenuComponent } from './categorymenu/categorymenu.component';

@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    navbarComponent,
    searchBarComponent,
    topBannerComponent,
    categoryMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
