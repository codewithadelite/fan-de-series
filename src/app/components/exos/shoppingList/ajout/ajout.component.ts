import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.scss'
})
export class AjoutComponent {
    newArticle : string = ""

    @Output() ajouterArticleEvent : EventEmitter<string> = new EventEmitter<string>()

    ajoutArticleEnfant() : void{
        if(this.newArticle.trim()){
            this.ajouterArticleEvent.emit(this.newArticle)
            this.newArticle = ""
        }
    }
}
