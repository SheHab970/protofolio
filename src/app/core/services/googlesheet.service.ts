import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GooglesheetService {

  constructor(private _httpclient: HttpClient) { }

  private baseurl: string = 'https://api.sheetbest.com/sheets/1451b208-2103-45d8-97f3-a3d77200a3da'


  createsheet(name: any, email:any, massage:any): Observable<any>{
    
    return this._httpclient.post<any>(this.baseurl, {name, email, massage});
  }
}
