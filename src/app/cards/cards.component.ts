import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cardList:any[]=[]
  isLoading = true;
  selectedCard:any;
  highLightCard = false;
  constructor(private tableService: APIService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.tableService.getTableData().subscribe((result:any)=>{
      this.cardList = result.entries;
      this.isLoading = false;
    });
this.selectedCard = this.router.snapshot.paramMap.get("title")
console.log(this.selectedCard);
if(this.selectedCard!=null){
  this.highLightCard = true;
}
  }

  deleteCard(cardAPI:any){
    this.cardList = this.cardList.filter(x=>x.API != cardAPI);
  }

}
