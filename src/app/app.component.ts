import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Anand';
  cardList:any[]=[];
  mode :any = 'light';
  //isLoading = true;
  subscription: Subscription = new Subscription;
  constructor(private tableService: APIService,private router:Router){}

  
  ngOnInit(): void {
    this.tableService.getTableData().subscribe((result:any)=>{
      this.cardList = result.entries;
      //this.isLoading = false;
    });
    // this.tableService.getTheme().subscribe(res=>{
    //   console.log(res)
    //   if(res==undefined){
    //     this.mode = 'dark'
    //   }
    // })
    this.subscription = this.tableService.getTheme().subscribe(res=>{
      console.log(res)
      if(res==undefined){
        this.mode = 'dark';
        const bodyElement = document.body;
        bodyElement.classList.add("darkMode");
      }
    })
  }

  changeOption(optionAPI:any){
    this.router.navigate(['/cards',{title:optionAPI}])
  }
}
