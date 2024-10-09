import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { DemoService } from '../../../tools/services/demo.service';

@Component({
  selector: 'app-livre-service',
  templateUrl: './livre-service.component.html',
  styleUrl: './livre-service.component.scss'
})
export class LivreServiceComponent {
    newId : number = 1
    newTitre : string = ""

    constructor(private _demoS : DemoService) {}

    ajouterLivre() : void{
        if(this.newTitre.trim()){
            let newLivre = {id : this.newId, titre : this.newTitre}
            this._demoS.ajouterLivre(newLivre)
        }
    }
}
