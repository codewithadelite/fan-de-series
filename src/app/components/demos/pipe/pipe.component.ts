import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {
    texte : string = "Hello World !!!"
    date : Date = new Date()
    prix : number = 9756.42
    valeurNumerique : number = 98765431.123456
    pourcentage : number = 0.75
    utilisateur : any = {nom : 'Jhon', prenom : 'Doe'}
    fruits : string[] = ["Pomme", "Poire", "Pêche"]
}
