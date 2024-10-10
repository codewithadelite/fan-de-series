import { Component } from '@angular/core';
import { ShoppinglistService } from '../../../tools/services/shoppinglist.service';
import { of } from 'rxjs';

@Component({
    selector: 'app-shopping-list-service',
    templateUrl: './shopping-list-service.component.html',
    styleUrl: './shopping-list-service.component.scss'
})
export class ShoppingListServiceComponent {
    articles: any
    newArticleNom: string = ""
    newArticleQuantite: number = 1

    constructor(private _shoppingService: ShoppinglistService) {
        this.articles = this._shoppingService.getArticles()
    }

    ajouterArticle() {
        if (!this.newArticleNom) {
            alert("L'article doit être encodé pour être validée ❌")
        } else if (this.newArticleQuantite <= 0) {
            alert("La quantité doit être supérieur a zéro ❌")
        } else {
            this._shoppingService.ajouterArticle(this.newArticleNom, this.newArticleQuantite)
            this.articles = this._shoppingService.getArticles()
            this.newArticleNom = ""
            this.newArticleQuantite = 1
            alert("Article ajoutés avec succès ✅")
        }
    }

}
