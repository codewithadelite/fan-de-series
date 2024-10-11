import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { FansService } from '../../../../tools/services/fans.service';

interface Fan{
  nom : string;
  dob : Date;
  series : string[];
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  fanId! : string

  error: string = ""
  nom : string = ""
  dob : Date | string = ""
  series : string[] = []

  constructor(private _fansService : FansService, private _ar : ActivatedRoute, private _router : Router){
    this.fanId = this._ar.snapshot.params["id"]
    let fanData = this._fansService.getSingleFan(parseInt(this.fanId))

    this.nom = fanData.nom
    this.dob = this.formatDate(fanData.dob);
    this.series = fanData.series
    
  }

  private formatDate(date : Date) {
    let year = date.getFullYear();
    let month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-based
    let day = ('0' + date.getDate()).slice(-2);
  
    return `${year}-${month}-${day}`; // yyyy-MM-dd format
  }
}
