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
import { AtelierComponent } from './pages/ateliers/atelier/atelier.component';
import { DevenirHotesseComponent } from './pages/ateliers/devenir-hotesse/devenir-hotesse.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    TestimonieComponent,
    AtelierComponent,
    DevenirHotesseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, IvyCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
