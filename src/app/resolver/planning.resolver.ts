import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AtelierService } from '../services/atelier.service';

@Injectable({
  providedIn: 'root',
})
export class PlanningResolver implements Resolve<boolean> {
  constructor(private atelierService: AtelierService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.atelierService.getConseillereAtelier();
  }
}
