import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-table',
  templateUrl: './tableComponent.component.html',
  styleUrls: ['./tableComponent.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['API', 'Description', 'Auth', 'HTTPS','Link','Cors', 'Category'];
  dataSource:any;
  isLoading = true;
  constructor(private tableService: APIService){}
  
  ngOnInit(): void {
    this.tableService.getTableData().subscribe((result:any)=>{
      this.dataSource = result.entries;
      this.isLoading = false;
    })
  }

}
