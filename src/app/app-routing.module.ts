import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesConseillereComponent } from './pages/atelier/acces-conseillere/acces-conseillere.component';
import { AccesHotesseComponent } from './pages/atelier/acces-hotesse/acces-hotesse.component';
import { InscriptionConseillereComponent } from './pages/atelier/inscription-conseillere/inscription-conseillere.component';
import { InscriptionHotesseComponent } from './pages/atelier/inscription-hotesse/inscription-hotesse.component';
import { AtelierComponent } from './pages/ateliers/atelier/atelier.component';
import { DevenirConseillereComponent } from './pages/ateliers/devenir-conseillere/devenir-conseillere.component';
import { DevenirHotesseComponent } from './pages/ateliers/devenir-hotesse/devenir-hotesse.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ConnaitreCheveuxComponent } from './pages/programmes/connaitre-cheveux/connaitre-cheveux.component';
import { RecetteComponent } from './pages/programmes/recette/recette.component';
import { RoutineCapillaireComponent } from './pages/programmes/routine-capillaire/routine-capillaire.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: '404', component: NotFoundComponent },

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
  // {path: '', component: },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
