import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss'
})
export class BindingComponent {
    nom : string  = "Jhon Doe"
    nombreTwoWay : number = 0
    compteur : number = 0
    clickPlus : boolean = false
    clickMoins : boolean = false

    incrementation() : void{
        this.compteur++
        if (this.compteur >= 10){
            this.clickPlus = true
        }
        else{
            this.clickPlus = false
        }
    }

    decrementation() : void{
        this.compteur--
        if (this.compteur <= -10){
            this.clickMoins = true
        }
        else{
            this.clickMoins = false
        }
    }
}
