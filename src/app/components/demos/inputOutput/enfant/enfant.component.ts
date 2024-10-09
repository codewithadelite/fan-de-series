import { Component, Input, input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.scss'
})
export class EnfantComponent {
    newNomCommande : string = ""
    // Prop's d'entrée pour recevoir la commande
    @Input() commande : any

    // Événement de sortie pour notifier le parent de la demande de suppression
    @Output() suppressionEnfant : EventEmitter<number> = new EventEmitter<number>()

    // Événement de sortie pour notigier le parent de mise à jour du nom
    @Output() updateEnfant : EventEmitter<{id : number, nom : string}> = new EventEmitter<{id : number, nom : string}>()

    // Booléen pour le controle de l'affichage de l'input d'update
    isUpdate : boolean = false

    supprimer(idCommande : number) : void{
        this.suppressionEnfant.emit(idCommande)
    }

    // Méthode pour afficher l'input de mise a jour du nom avec la valeur actuelle de newNomCommande
    afficherUpdate(nom : string) : void {
        this.newNomCommande = nom
        this.isUpdate = !this.isUpdate
    }

    // Méthode pour émmetre l'événment de mise à jour du prénom avec l'id
    sauvegarde(idCommande : number){
        this.updateEnfant.emit({id : idCommande, nom : this.newNomCommande})
        this.isUpdate = !this.isUpdate
    }
}
