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
import { DevenirConseillereComponent } from './pages/ateliers/devenir-conseillere/devenir-conseillere.component';
import { AtelierHeaderComponent } from './components/atelier-header/atelier-header.component';
import { AccesHotesseComponent } from './pages/atelier/acces-hotesse/acces-hotesse.component';
import { AccesConseillereComponent } from './pages/atelier/acces-conseillere/acces-conseillere.component';
import { InscriptionConseillereComponent } from './pages/atelier/inscription-conseillere/inscription-conseillere.component';
import { InscriptionHotesseComponent } from './pages/atelier/inscription-hotesse/inscription-hotesse.component';
import { InscriptionComponent } from './pages/atelier/inscription/inscription.component';
import { ConnexionComponent } from './pages/atelier/connexion/connexion.component';

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
    DevenirConseillereComponent,
    AtelierHeaderComponent,
    AccesHotesseComponent,
    AccesConseillereComponent,
    InscriptionConseillereComponent,
    InscriptionHotesseComponent,
    InscriptionComponent,
    ConnexionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, IvyCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
