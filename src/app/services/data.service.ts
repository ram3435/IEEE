import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private membershipAPI:string="https://randomuser.me/api/";

  constructor(private http:HttpClient) { }

  getMemberships(pageNumber:number, resultsPerPage:number=10){

    var url:string= this.membershipAPI + "?results="+ resultsPerPage + "&page=" + pageNumber;
    return this.http.get(url);

  }
}
