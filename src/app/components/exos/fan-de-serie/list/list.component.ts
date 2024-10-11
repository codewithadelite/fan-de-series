import { Component } from '@angular/core';
import { FansService } from '../../../../tools/services/fans.service';


interface PartialFan {
  nom : string;
  dob : Date;
  series : string[];
}

interface Fan extends PartialFan{
  id: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  fans : Fan[] = this._fansService.getFans()

  constructor(private _fansService: FansService){}

  delete(id: number){
    this._fansService.delete(id)
  }

  addFan(fan: PartialFan) : void{
    this._fansService.addFan(fan)
  }

}
