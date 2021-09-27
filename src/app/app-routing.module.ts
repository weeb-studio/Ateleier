import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtelierComponent } from './pages/ateliers/atelier/atelier.component';
import { DevenirHotesseComponent } from './pages/ateliers/devenir-hotesse/devenir-hotesse.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: '404', component: NotFoundComponent },
  { path: 'atelier', component: AtelierComponent },
  { path: 'atelier/hotesse', component: DevenirHotesseComponent },
  // {path: '', component: },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
