import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

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
import { SideConseillereComponent } from './pages/conseillere/components/side-conseillere/side-conseillere.component';
import { DashConseillereComponent } from './pages/conseillere/dash-conseillere/dash-conseillere.component';
import { AjoutAtelierComponent } from './pages/conseillere/ajout-atelier/ajout-atelier.component';
import { DashHotesseComponent } from './pages/hotesse/dash-hotesse/dash-hotesse.component';
import { DashClienteComponent } from './pages/client/dash-cliente/dash-cliente.component';
import { CatalogueComponent } from './pages/admin/pages/catalogue/catalogue.component';
import { ShampoingsComponent } from './pages/programmes/recette/shampoings/shampoings.component';
import { LotionCremeComponent } from './pages/programmes/recette/lotion-creme/lotion-creme.component';
import { MasquesComponent } from './pages/programmes/recette/masques/masques.component';
import { SoinsCapillaireComponent } from './pages/programmes/recette/soins-capillaire/soins-capillaire.component';
import { CheveuxAvecPelliculeComponent } from './pages/programmes/routine-capillaire/cheveux-avec-pellicule/cheveux-avec-pellicule.component';
import { CheveuxPeuPoreuxComponent } from './pages/programmes/routine-capillaire/cheveux-peu-poreux/cheveux-peu-poreux.component';
import { CheveuxSecComponent } from './pages/programmes/routine-capillaire/cheveux-sec/cheveux-sec.component';
import { SoinAntiCapillaireComponent } from './pages/programmes/recette/soin-anti-capillaire/soin-anti-capillaire.component';
import { ChuteCasseComponent } from './pages/programmes/connaitre-cheveux/chute-casse/chute-casse.component';
import { ContactComponent } from './pages/admin/pages/discussions/contact/contact.component';
import { TchatComponent } from './pages/admin/pages/discussions/tchat/tchat.component';
import { RoutineSimpleComponent } from './pages/programmes/routine-capillaire/routine-simple/routine-simple.component';
import { DiversesInfluencesComponent } from './pages/programmes/connaitre-cheveux/diverses-influences/diverses-influences.component';
import { IngredientsAEviterComponent } from './pages/programmes/connaitre-cheveux/ingredients-a-eviter/ingredients-a-eviter.component';

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
    SideConseillereComponent,
    DashConseillereComponent,
    AjoutAtelierComponent,
    DashHotesseComponent,
    DashClienteComponent,
    CatalogueComponent,
    ShampoingsComponent,
    LotionCremeComponent,
    MasquesComponent,
    SoinsCapillaireComponent,
    CheveuxAvecPelliculeComponent,
    CheveuxPeuPoreuxComponent,
    CheveuxSecComponent,
    SoinAntiCapillaireComponent,
    ChuteCasseComponent,
    ContactComponent,
    TchatComponent,
    RoutineSimpleComponent,
    DiversesInfluencesComponent,
    IngredientsAEviterComponent,
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
    { provide: LOCALE_ID, useValue: 'fr' },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
