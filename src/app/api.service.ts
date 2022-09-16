import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  theme:any='light';

  constructor(private http: HttpClient) { }

  getTableData() : Observable<any>{
    return this.http.get<any>('https://api.publicapis.org/entries')
  }
  setTheme(theme:any){
    console.log(this.theme.theme)
    this.theme = theme
  }
  getTheme():Observable<any>{
    console.log(this.theme)
    return of(this.theme)
  }
}
