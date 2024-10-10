import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrl: './profil-user.component.scss'
})
export class ProfilUserComponent {
    idRecup! : number

    constructor(private _ar : ActivatedRoute){
        this.idRecup = this._ar.snapshot.params["id"]
    }
}
