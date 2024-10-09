import { Component } from '@angular/core';
import { commandes } from '../datas';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

    // Déclaration de la liste de Commande à partir des données datas
    commandes : {id : number, nom : string}[] = commandes

    supprimerParId(idCommande : number){
        const index = this.commandes.findIndex(commande => commande.id === idCommande)
        this.commandes.splice(index, 1)
    }

    updateEnfant(commandeUpdate : {id : number, nom : string}){
        const index = this.commandes.findIndex(commande => commande.id === commandeUpdate.id)
        this.commandes[index].nom = commandeUpdate.nom
    }
}
