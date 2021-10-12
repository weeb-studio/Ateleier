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
<<<<<<< HEAD
import { ShampoingClarifiantComponent } from './pages/recette/shampoing-clarifiant/shampoing-clarifiant.component';
import { MasqueNourissantComponent } from './pages/recette/masque-nourissant/masque-nourissant.component';
import { MasqueCafeComponent } from './pages/recette/masque-cafe/masque-cafe.component';
import { TraitementChimiqueComponent } from './pages/connaitre-cheveux/traitement-chimique/traitement-chimique.component';
import { PerruquesTressesTissagesComponent } from './pages/connaitre-cheveux/perruques-tresses-tissages/perruques-tresses-tissages.component';
import { ProgrammeHeaderComponent } from './components/programme-header/programme-header.component';
import { HotesseHeaderComponent } from './components/hotesse-header/hotesse-header.component';
import { ConseillereHeaderComponent } from './components/conseillere-header/conseillere-header.component';
import { CheveuxSecComponent } from './pages/routines-capillaires/cheveux-sec/cheveux-sec.component';
import { ChuteCasseComponent } from './pages/routines-capillaires/chute-casse/chute-casse.component';
import { CheveuxPoreuxComponent } from './pages/routines-capillaires/cheveux-poreux/cheveux-poreux.component';
import { LutteContrePelliculeComponent } from './pages/routines-capillaires/lutte-contre-pellicule/lutte-contre-pellicule.component';
<<<<<<< HEAD
import { RoutineObjectifComponent } from './pages/programmes/routine-objectif/routine-objectif.component';
import { RoutineHeaderComponent } from './components/routine-header/routine-header.component';
import { HotesseAcceuilComponent } from './pages/hotesse/hotesse-acceuil/hotesse-acceuil.component';
import { HotesseCadeauComponent } from './pages/hotesse/hotesse-cadeau/hotesse-cadeau.component';
import { HotesseRelevePointComponent } from './pages/hotesse/hotesse-releve-point/hotesse-releve-point.component';
import { HotesseAtelierComponent } from './pages/hotesse/hotesse-atelier/hotesse-atelier.component';
import { HotesseCompteComponent } from './pages/hotesse/hotesse-compte/hotesse-compte.component';
=======
import { MasqueCafeComponent } from './pages/programmes/recette/masque-cafe/masque-cafe.component';
import { MasqueNourissantComponent } from './pages/programmes/recette/masque-nourissant/masque-nourissant.component';
import { ShampoingClarifiantComponent } from './pages/programmes/recette/shampoing-clarifiant/shampoing-clarifiant.component';
import { TraitementChimiqueComponent } from './pages/programmes/connaitre-cheveux/traitement-chimique/traitement-chimique.component';
import { PerruqueTresseTissageComponent } from './pages/programmes/connaitre-cheveux/perruque-tresse-tissage/perruque-tresse-tissage.component';
>>>>>>> b91a435fdfaab7783ddfbffbcf987d8f86faaf37
=======
>>>>>>> parent of 6090b95 (12/10)

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
<<<<<<< HEAD
    ShampoingClarifiantComponent,
    MasqueNourissantComponent,
    MasqueCafeComponent,
    TraitementChimiqueComponent,
    PerruquesTressesTissagesComponent,
    ProgrammeHeaderComponent,
    HotesseHeaderComponent,
    ConseillereHeaderComponent,
    CheveuxSecComponent,
    ChuteCasseComponent,
    CheveuxPoreuxComponent,
    LutteContrePelliculeComponent,
<<<<<<< HEAD
    RoutineObjectifComponent,
    RoutineHeaderComponent,
    HotesseAcceuilComponent,
    HotesseCadeauComponent,
    HotesseRelevePointComponent,
    HotesseAtelierComponent,
    HotesseCompteComponent,
=======
    MasqueCafeComponent,
    MasqueNourissantComponent,
    ShampoingClarifiantComponent,
    TraitementChimiqueComponent,
    PerruqueTresseTissageComponent,
>>>>>>> b91a435fdfaab7783ddfbffbcf987d8f86faaf37
=======
>>>>>>> parent of 6090b95 (12/10)
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
