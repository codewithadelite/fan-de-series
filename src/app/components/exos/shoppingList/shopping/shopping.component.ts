import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {
    articlesParent : {id : number, nom : string}[] = []
    prochainId : number = 1

    AjouterArticleParent(newNom : string) : void{
        this.articlesParent.push({id : this.prochainId, nom : newNom})
        this.prochainId++
    }

    supprimerArticleParent(id : number) : void{
        let index = this.articlesParent.findIndex(article => article.id === id)
        this.articlesParent.splice(index, 1)
    }
}
