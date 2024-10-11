import { Component} from '@angular/core';
import { FansService } from '../../../../tools/services/fans.service';

interface Fan{
  nom : string;
  dob : Date;
  series : string[];
}


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  error: string = ""
  nom : string = ""
  dob : Date = new Date()
  series : string = ""

  constructor(private _fansService : FansService){}



  createFan() : void{
    if(this.nom === ""){
      this.error = "Nom requis.";
      return;
    }

    let currentTime = new Date();
    let currentYear = currentTime.getFullYear()
    let age = currentYear - new Date(this.dob).getFullYear();

    if(age < 13){
      this.error = "Interdit au moins de 13 ans.";
      return;
    }

    const data : Fan = {
      nom: this.nom,
      dob: new Date(this.dob),
      series: this.series.split(",")
    }

    console.log(data)

    this._fansService.addFan(data)
    this.clearData()

  }

  private clearData() : void{
    this.error = ""
    this.nom = ""
    this.dob = new Date()
    this.series =""
  }
}
