import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AtelierService } from 'src/app/services/atelier.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-devenir-conseillere',
  templateUrl: './devenir-conseillere.component.html',
  styleUrls: ['./devenir-conseillere.component.scss'],
})
export class DevenirConseillereComponent implements OnInit {
  constructor(
    private atelierService: AtelierService,
    private userService: UserService,
    private route: Router
  ) {
    this.getAtelier();
    this.userService.getUser().subscribe((res: any) => {
      this.id = res._id;
    });
  }
  id: string = '';
  items: any = [];
  search: any = [];
  ngOnInit(): void {}

  getAtelier() {
    this.atelierService.getAtelier().subscribe((res: any) => {
      this.items = res.data;
      console.log(this.items);
    });
  }

  searchAtelier(event: any) {
    console.log(this.search.length);
    console.log(event.target.value);
    if (event.target.value == '') {
      this.search = [];
    } else {
      this.atelierService
        .getAtelier(event.target.value)
        .subscribe((res: any) => {
          // console.log(res);
          var obj: any = res;
          this.search = obj.data;
          console.log(this.search);
        });
    }
  }

  remening(participant: number, total: number): String {
    let test = '';
    const value = total - participant;
    if (value == 0) {
      test = 'COMPLET';
    } else if (value == 1) {
      test = value + ' Place';
    } else if (value > 1) {
      test = value + ' Places';
    }
    return test;
  }
  reservation(participant: any[], id: string) {
    this.userService.getUser().subscribe(
      (res: any) => {
        console.log(res._id);
        this.atelierService.inscriptionAtelier(id).subscribe((resp: any) => {
          console.log(resp);
        });
      },
      (err: any) => {
        console.log(err);
        this.route.navigate(['/connexion']);
      }
    );
  }

  check(participant: any[]): boolean {
    let test = false;
    if (this.id != '') {
      test = participant.includes(this.id);
    }
    console.log(this.id);
    return true;
  }
}
