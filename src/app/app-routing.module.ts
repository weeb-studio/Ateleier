import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './pages/admin/pages/catalogue/catalogue.component';
import { DashboardComponent } from './pages/admin/pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/admin/pages/discussions/contact/contact.component';
import { TchatComponent } from './pages/admin/pages/discussions/tchat/tchat.component';
import { ClienteComponent } from './pages/admin/pages/utilisateurs/cliente/cliente.component';
import { ConseillereComponent } from './pages/admin/pages/utilisateurs/conseillere/conseillere.component';
import { HotesseComponent } from './pages/admin/pages/utilisateurs/hotesse/hotesse.component';
import { UtilisateursComponent } from './pages/admin/pages/utilisateurs/utilisateurs.component';
import { AccesConseillereComponent } from './pages/atelier/acces-conseillere/acces-conseillere.component';
import { AccesHotesseComponent } from './pages/atelier/acces-hotesse/acces-hotesse.component';
import { ConnexionComponent } from './pages/atelier/connexion/connexion.component';
import { InscriptionConseillereComponent } from './pages/atelier/inscription-conseillere/inscription-conseillere.component';
import { InscriptionHotesseComponent } from './pages/atelier/inscription-hotesse/inscription-hotesse.component';
import { InscriptionComponent } from './pages/atelier/inscription/inscription.component';
import { AtelierComponent } from './pages/ateliers/atelier/atelier.component';
import { DevenirConseillereComponent } from './pages/ateliers/devenir-conseillere/devenir-conseillere.component';
import { DevenirHotesseComponent } from './pages/ateliers/devenir-hotesse/devenir-hotesse.component';
import { DashClienteComponent } from './pages/client/dash-cliente/dash-cliente.component';
import { AjoutAtelierComponent } from './pages/conseillere/ajout-atelier/ajout-atelier.component';
import { CommandeComponent } from './pages/conseillere/commande/commande.component';
import { DashConseillereComponent } from './pages/conseillere/dash-conseillere/dash-conseillere.component';
import { FaqConseillereComponent } from './pages/faq-conseillere/faq-conseillere.component';
import { FaqHotesseComponent } from './pages/faq-hotesse/faq-hotesse.component';
import { HomeComponent } from './pages/home/home.component';
import { DashHotesseComponent } from './pages/hotesse/dash-hotesse/dash-hotesse.component';
import { MentionLegaleComponent } from './pages/mention-legale/mention-legale.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NousContacterComponent } from './pages/nous-contacter/nous-contacter.component';
import { ConceptComponent } from './pages/programmes/concept/concept.component';
import { ChuteCasseComponent } from './pages/programmes/connaitre-cheveux/chute-casse/chute-casse.component';
import { ConnaitreCheveuxComponent } from './pages/programmes/connaitre-cheveux/connaitre-cheveux.component';
import { DiversesInfluencesComponent } from './pages/programmes/connaitre-cheveux/diverses-influences/diverses-influences.component';
import { IngredientsAEviterComponent } from './pages/programmes/connaitre-cheveux/ingredients-a-eviter/ingredients-a-eviter.component';
import { PerruqueTresseTissageComponent } from './pages/programmes/connaitre-cheveux/perruque-tresse-tissage/perruque-tresse-tissage.component';
import { TraitementChimiqueComponent } from './pages/programmes/connaitre-cheveux/traitement-chimique/traitement-chimique.component';
import { LotionCremeComponent } from './pages/programmes/recette/lotion-creme/lotion-creme.component';
import { MasqueCafeComponent } from './pages/programmes/recette/masque-cafe/masque-cafe.component';
import { MasqueNourissantComponent } from './pages/programmes/recette/masque-nourissant/masque-nourissant.component';
import { MasquesComponent } from './pages/programmes/recette/masques/masques.component';
import { RecetteComponent } from './pages/programmes/recette/recette.component';
import { ShampoingClarifiantComponent } from './pages/programmes/recette/shampoing-clarifiant/shampoing-clarifiant.component';
import { ShampoingSecComponent } from './pages/programmes/recette/shampoing-sec/shampoing-sec.component';
import { ShampoingsComponent } from './pages/programmes/recette/shampoings/shampoings.component';
import { SoinAntiCapillaireComponent } from './pages/programmes/recette/soin-anti-capillaire/soin-anti-capillaire.component';
import { SoinsCapillaireComponent } from './pages/programmes/recette/soins-capillaire/soins-capillaire.component';
import { CheveuxAvecPelliculeComponent } from './pages/programmes/routine-capillaire/cheveux-avec-pellicule/cheveux-avec-pellicule.component';
import { CheveuxPeuPoreuxComponent } from './pages/programmes/routine-capillaire/cheveux-peu-poreux/cheveux-peu-poreux.component';
import { CheveuxSecComponent } from './pages/programmes/routine-capillaire/cheveux-sec/cheveux-sec.component';
import { RoutineCapillaireComponent } from './pages/programmes/routine-capillaire/routine-capillaire.component';
import { RoutineSimpleComponent } from './pages/programmes/routine-capillaire/routine-simple/routine-simple.component';
import { QuiSommesNousComponent } from './pages/qui-sommes-nous/qui-sommes-nous.component';
import { AdminGuard } from './shared/admin.guard';
import { AuthGuard } from './shared/auth.guard';
import { ConseillereGuard } from './shared/conseillere.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: '404', component: NotFoundComponent },
  {
    path: 'connexion',
    canActivate: [AuthGuard],
    component: ConnexionComponent,
  },
  { path: 'faq-hotesse', component: FaqHotesseComponent },
  { path: 'faq-conseillere', component: FaqConseillereComponent },
  { path: 'mention-legale', component: MentionLegaleComponent },
  { path: 'nous-contacter', component: NousContacterComponent },
  { path: 'qui-sommes-nous', component: QuiSommesNousComponent },

  //Atelier
  { path: 'atelier', component: AtelierComponent },
  { path: 'atelier/hotesse', component: DevenirHotesseComponent },
  { path: 'atelier/conseillere', component: DevenirConseillereComponent },
  {
    path: 'atelier/inscription/conseillere',
    component: InscriptionConseillereComponent,
  },
  { path: 'acces-conseillere', component: AccesConseillereComponent },
  { path: 'acces-hotesse', component: AccesHotesseComponent },
  {
    path: 'atelier/inscription/hotesse',
    component: InscriptionHotesseComponent,
  },
  // Programmes
  { path: 'programmes/recette', component: RecetteComponent },
  {
    path: 'programmes/connaitre-ses-cheveux',
    component: ConnaitreCheveuxComponent,
  },
  {
    path: 'programmes/routine-capillaire',
    component: RoutineCapillaireComponent,
  },
  { path: 'programme', redirectTo: 'programmes/connaitre-ses-cheveux' },
  { path: 'programmes/concept', component: ConceptComponent },
  { path: 'programmes/shampoing-sec', component: ShampoingSecComponent },
  {
    path: 'programmes/shampoing-clarifiant',
    component: ShampoingClarifiantComponent,
  },
  { path: 'programmes/masque-cafe', component: MasqueCafeComponent },
  {
    path: 'programmes/masque-nourissant',
    component: MasqueNourissantComponent,
  },
  {
    path: 'programmes/perruques-tresses-tissages',
    component: PerruqueTresseTissageComponent,
  },
  {
    path: 'programmes/traitement-chimique',
    component: TraitementChimiqueComponent,
  },

  {
    path: 'programmes/recette/shampoings',
    component: ShampoingsComponent,
  },

  {
    path: 'programmes/recette/lotion-creme',
    component: LotionCremeComponent,
  },

  {
    path: 'programmes/recette/masques',
    component: MasquesComponent,
  },
  { path: 'programmes/soins-capillaire', component: SoinsCapillaireComponent },

  {
    path: 'programmes/cheveux-avec-pellicule',
    component: CheveuxAvecPelliculeComponent,
  },
  {
    path: 'programmes/cheveux-peu-poreux',
    component: CheveuxPeuPoreuxComponent,
  },
  { path: 'programmes/cheveux-sec', component: CheveuxSecComponent },
  { path: 'programmes/chute-casse', component: ChuteCasseComponent },
  {
    path: 'programmes/soin-anti-capillaire',
    component: SoinAntiCapillaireComponent,
  },
  { path: 'programmes/routine-simple', component: RoutineSimpleComponent },
  {
    path: 'programmes/ingredients-à-éviter',
    component: IngredientsAEviterComponent,
  },

  {
    path: 'programmes/diverses-influences',
    component: DiversesInfluencesComponent,
  },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'dash/cliente', component: DashClienteComponent },

  // Admin

  {
    path: 'admin',
    canActivate: [AdminGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'utilisateur',

        children: [
          {
            path: '',
            component: UtilisateursComponent,
          },
          {
            path: 'conseillere',
            component: ConseillereComponent,
          },
          {
            path: 'cliente',
            component: ClienteComponent,
          },
          {
            path: 'hotesse',
            component: HotesseComponent,
          },
        ],
      },
      {
        path: 'catalogue',
        children: [
          {
            path: '',
            component: CatalogueComponent,
          },
        ],
      },
      {
        path: 'discussions',
        children: [
          {
            path: 'contact',
            component: ContactComponent,
          },
          {
            path: 'tchat',
            component: TchatComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'hotesse',
    children: [
      {
        path: '',
        component: DashHotesseComponent,
      },
    ],
  },
  {
    path: 'cliente',
    children: [
      {
        path: '',
        component: DashClienteComponent,
      },
    ],
  },

  // Conseillere
  {
    path: 'conseillere',
    canActivate: [ConseillereGuard],
    children: [
      {
        path: '',
        component: DashConseillereComponent,
      },
      {
        path: 'ajout-atelier',
        component: AjoutAtelierComponent,
      },
      {
        path: 'commandes',
        component: CommandeComponent,
      },
    ],
  },

  // {path: '', component: },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
