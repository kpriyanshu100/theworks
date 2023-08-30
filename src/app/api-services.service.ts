import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private httpclient:HttpClient) { }
  getTableData(id:number){
    let url=`https://reqres.in/api/users?page=${id}`;
    return this.httpclient.get(url);
  }
}
