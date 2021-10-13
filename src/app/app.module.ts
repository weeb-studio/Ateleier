import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

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
import { ConnaitreCheveuxComponent } from './pages/programmes/connaitre-cheveux/connaitre-cheveux.component';
import { RecetteComponent } from './pages/programmes/recette/recette.component';
import { RoutineCapillaireComponent } from './pages/programmes/routine-capillaire/routine-capillaire.component';
import { ConceptComponent } from './pages/programmes/concept/concept.component';
import { SideBarComponent } from './pages/admin/components/side-bar/side-bar.component';
import { DashboardComponent } from './pages/admin/pages/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FaqHotesseComponent } from './pages/faq-hotesse/faq-hotesse.component';
import { FaqConseillereComponent } from './pages/faq-conseillere/faq-conseillere.component';
import { MentionLegaleComponent } from './pages/mention-legale/mention-legale.component';
import { NousContacterComponent } from './pages/nous-contacter/nous-contacter.component';
import { QuiSommesNousComponent } from './pages/qui-sommes-nous/qui-sommes-nous.component';
import { UtilisateursComponent } from './pages/admin/pages/utilisateurs/utilisateurs.component';
import { ConseillereComponent } from './pages/admin/pages/utilisateurs/conseillere/conseillere.component';
import { HotesseComponent } from './pages/admin/pages/utilisateurs/hotesse/hotesse.component';
import { ClienteComponent } from './pages/admin/pages/utilisateurs/cliente/cliente.component';
import { AdminHeaderComponent } from './pages/admin/components/admin-header/admin-header.component';
import { ShampoingSecComponent } from './pages/programmes/recette/shampoing-sec/shampoing-sec.component';
import { MasqueCafeComponent } from './pages/programmes/recette/masque-cafe/masque-cafe.component';
import { MasqueNourissantComponent } from './pages/programmes/recette/masque-nourissant/masque-nourissant.component';
import { ShampoingClarifiantComponent } from './pages/programmes/recette/shampoing-clarifiant/shampoing-clarifiant.component';
import { TraitementChimiqueComponent } from './pages/programmes/connaitre-cheveux/traitement-chimique/traitement-chimique.component';
import { PerruqueTresseTissageComponent } from './pages/programmes/connaitre-cheveux/perruque-tresse-tissage/perruque-tresse-tissage.component';
import { HotesseAcceuilComponent } from './pages/hotesse/hotesse-acceuil/hotesse-acceuil.component';
import { HotesseAtelierComponent } from './pages/hotesse/hotesse-atelier/hotesse-atelier.component';
import { HotesseRelevePointComponent } from './pages/hotesse/hotesse-releve-point/hotesse-releve-point.component';
import { HotesseCadeauComponent } from './pages/hotesse/hotesse-cadeau/hotesse-cadeau.component';
import { HotesseHeaderComponent } from './components/hotesse-header/hotesse-header.component';
import { ClienteCompteComponent } from './pages/cliente/cliente-compte/cliente-compte.component';
import { ClienteMenuComponent } from './components/cliente-menu/cliente-menu.component';
import { ClienteProduitComponent } from './pages/cliente/cliente-produit/cliente-produit.component';
import { ClienteProfilBeauteComponent } from './pages/cliente/cliente-profil-beaute/cliente-profil-beaute.component';

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
    ConnaitreCheveuxComponent,
    RecetteComponent,
    RoutineCapillaireComponent,
    ConceptComponent,
    SideBarComponent,
    DashboardComponent,
    FaqHotesseComponent,
    FaqConseillereComponent,
    MentionLegaleComponent,
    NousContacterComponent,
    QuiSommesNousComponent,
    UtilisateursComponent,
    ConseillereComponent,
    HotesseComponent,
    ClienteComponent,
    AdminHeaderComponent,
    ShampoingSecComponent,
    MasqueCafeComponent,
    MasqueNourissantComponent,
    ShampoingClarifiantComponent,
    TraitementChimiqueComponent,
    PerruqueTresseTissageComponent,
    HotesseAcceuilComponent,
    HotesseAtelierComponent,
    HotesseRelevePointComponent,
    HotesseCadeauComponent,
    HotesseHeaderComponent,
    ClienteCompteComponent,
    ClienteMenuComponent,
    ClienteProduitComponent,
    ClienteProfilBeauteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
