import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ShoppinglistService {
    private articles: { nom: string, quantite: number }[] = [
        { nom: "test", quantite: 5 }
    ]

    // get articles
    getArticles(){
        return this.articles
    }

    // ajouter article
    ajouterArticle(nom: string, quantite: number) {
        const article = this.articles.find(article => article.nom === nom)
        if (article) {
            article.quantite += quantite
            alert(`Le produit ${nom} existe déjà dans la liste \nQuantité incrémentée de ${quantite}`)
        } else {
            this.articles.push({ nom, quantite })
        }
    }

    // update quantite
    updateQuantite(nom: string, quantite: number) {
        const article = this.articles.find(article => article.nom === nom)
        if (article) {
            article.quantite = quantite
            if (article.quantite <= 0) {
                this.supprimerArticle(nom)
            }
        }
    }

    // supprimer article
    supprimerArticle(nom: string) {
        this.articles = this.articles.filter(article => article.nom !== nom)
    }
}
