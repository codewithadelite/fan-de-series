import { Injectable } from '@angular/core';


interface PartialFan {
  nom : string;
  dob : Date;
  series : string[];
}

interface Fan extends PartialFan{
  id: number;
}

@Injectable({
    providedIn: 'root'
})
export class FansService {
  fans: Fan[] = [
    {
      id: 1,
      nom: "Alice",
      dob: new Date(1995, 5, 15),
      series: ["Breaking Bad", "Stranger Things", "The Witcher"]
    },
    {
      id: 2,
      nom: "Bob",
      dob: new Date(1990, 10, 22),
      series: ["Game of Thrones", "The Mandalorian", "The Expanse"]
    },
    {
      id: 3,
      nom: "Clara",
      dob: new Date(1992, 7, 30),
      series: ["Friends", "How I Met Your Mother", "Brooklyn Nine-Nine"]
    },
    {
      id: 4,
      nom: "David",
      dob: new Date(1988, 3, 10),
      series: ["Sherlock", "Black Mirror", "Peaky Blinders"]
    },
    {
      id: 5,
      nom: "Eva",
      dob: new Date(1994, 2, 5),
      series: ["The Crown", "Fleabag", "The Office"]
    },
    {
      id: 6,
      nom: "Frank",
      dob: new Date(1996, 8, 21),
      series: ["Rick and Morty", "BoJack Horseman", "South Park"]
    },
    {
      id: 7,
      nom: "Grace",
      dob: new Date(1989, 12, 12),
      series: ["Stranger Things", "Mindhunter", "Narcos"]
    },
    {
      id: 8,
      nom: "Hank",
      dob: new Date(1991, 4, 8),
      series: ["Westworld", "The Boys", "The Umbrella Academy"]
    },
    {
      id: 9,
      nom: "Isla",
      dob: new Date(1993, 6, 25),
      series: ["The Witcher", "Vikings", "The Last Kingdom"]
    }
  ];
  

  getFans() : Fan[] {
    return this.fans
  }

  getSingleFan(id : number) : Fan{
    let fanIndex = this.fans.findIndex(fan => fan.id === id);
    console.log(fanIndex)
    return this.fans[fanIndex]
  }

  delete(id: number){
    let fanIndex = this.fans.findIndex(fan => fan.id === id);
    if(fanIndex === -1){
      return;
    }
    this.fans.splice(fanIndex, 1);
  }

  addFan(fan: PartialFan) : void{
    let newId : number = this.fans[this.fans.length - 1].id + 1;
    let newFan: Fan = {...fan, id: newId}
    this.fans.unshift(newFan)
  }

  updateFan(id : number, fan: PartialFan) : void{
    let fanIndex = this.fans.findIndex(fan => fan.id === id);
    this.fans[fanIndex] = {id : id, ...fan}
  }

}
