import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
    livres: any[] = [
        { id: 1, titre: "Toto" },
        { id: 2, titre: "Tata" },
        { id: 3, titre: "Titi" }
    ]

    ajouterLivre(livre: { id: number, titre: string }): void {
        this.livres.push(livre)
    }
}
