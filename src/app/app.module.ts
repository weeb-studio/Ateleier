import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TestimonieComponent } from './components/testimonie/testimonie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    TestimonieComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, IvyCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
