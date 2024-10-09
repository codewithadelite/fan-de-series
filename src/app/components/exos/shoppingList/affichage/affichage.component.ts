import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrl: './affichage.component.scss'
})
export class AffichageComponent {
    @Input() articlesEnfant : {id : number, nom : string}[] = []

    @Output() supprimerArticleEvent : EventEmitter<number> = new EventEmitter<number>()

    supprimerArticleEnfant(id :number) : void{
        this.supprimerArticleEvent.emit(id)
    }
}
