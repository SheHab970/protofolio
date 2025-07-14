import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class GooglesheetService {

  constructor(private _httpclient: HttpClient) { }

  private baseurl: string = 'https://api.emailjs.com/api/v1.0/email/send'


  createsheet(data: any): Observable<any>{
    
    return this._httpclient.post(
    this.baseurl,
    {
    lib_version: "4.4.1",
    service_id: "service_hspqq5m",
    template_id: "template_x9s5afi",
    template_params: data,
    user_id: "lTp5iaB8RSO0KRoRw",
    },
    {
      responseType: 'text',
    }
  );
  }
}
