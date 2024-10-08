import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss'
})
export class DirectiveComponent {
    visible : boolean = true
    options : string | null = null
    fruits : string[] = ["Pomme", "Poire", "Pêche"]
    estSpecial : boolean = true
    peutValider : boolean = false

    toggle() : void{
        this.visible = !this.visible
        console.log(this.visible);
    }

    selection(optionSlectionnee : string): void{
        this.options = optionSlectionnee
    }

    reset() : void {
        this.options = null
    }

}
