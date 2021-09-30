import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HotesseComponent } from './pages/hotesse/hotesse.component';
import { RouterModule } from '@angular/router';
import { ConseillereComponent } from './pages/conseillere/conseillere.component';
import { CompteClienteComponent } from './pages/compte-cliente/compte-cliente.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ProfitBeauteComponent } from './pages/profit-beaute/profit-beaute.component';
import { BigoodeeComponent } from './pages/bigoodee/bigoodee.component';
import { DevenirHotesseComponent } from './pages/devenir-hotesse/devenir-hotesse.component';
import { DevenirConseillereComponent } from './pages/devenir-conseillere/devenir-conseillere.component';
import { RoutinesCapillairesComponent } from './pages/routines-capillaires/routines-capillaires.component';
import { AcceuilHotesseComponent } from './pages/acceuil-hotesse/acceuil-hotesse.component';
import { CadeauHotesseComponent } from './pages/cadeau-hotesse/cadeau-hotesse.component';
import { ConnaitreCheveuxComponent } from './pages/connaitre-cheveux/connaitre-cheveux.component';
import { RecetteComponent } from './pages/recette/recette.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent, NotFoundComponent, HotesseComponent, ConseillereComponent, CompteClienteComponent, ClienteComponent, ProfitBeauteComponent, BigoodeeComponent, DevenirHotesseComponent, DevenirConseillereComponent, RoutinesCapillairesComponent, AcceuilHotesseComponent, CadeauHotesseComponent, ConnaitreCheveuxComponent, RecetteComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'hotesse', component:HotesseComponent},
      {path:'compteCliente', component: CompteClienteComponent},
      {path: 'beaute', component: ProfitBeauteComponent},
      {path: 'conseillere', component: ConseillereComponent},
      {path: 'cliente', component: ClienteComponent},
      {path: 'bigoodee', component: BigoodeeComponent},
      {path: 'devenirHotesse', component: DevenirHotesseComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
