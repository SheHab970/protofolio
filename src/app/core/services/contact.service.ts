import { Injectable } from '@angular/core';
// import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseurl: string = 'https://script.google.com/macros/s/AKfycbxU2E80JQew6egu4NyqzS9QBCMIC-LKQA4I_IZLbTHCZqnvdeT8mPhE1UMwajLfeIuS8g/exec';

  constructor(private http: HttpClient) {}

  //   // Method to post data to Google Sheet
    postToSheet(data: any): Observable<any> {
      // const headers = new HttpHeaders({
      //   'Content-Type': 'application/json'
      // });
  
      return this.http.post(this.baseurl, data);
    }

    show():void{
      console.log("shehab function");
      
    }

}
