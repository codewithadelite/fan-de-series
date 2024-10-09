import { Component } from '@angular/core';
import { DemoService } from '../../../../tools/services/demo.service';

@Component({
    selector: 'app-affichage-livre',
    templateUrl: './affichage-livre.component.html',
    styleUrl: './affichage-livre.component.scss'
})
export class AffichageLivreComponent {
    livres: any[]

    constructor(private _demoS: DemoService) {
        this.livres = _demoS.livres
    }


}
