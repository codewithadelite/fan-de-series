import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.scss'
})
export class RoutingComponent {
    idUser! : number

    constructor(private _router : Router){}

    envoie(){
        if (this.idUser) {
                this._router.navigate(['/demos/profil', this.idUser])
        }
    }
}
