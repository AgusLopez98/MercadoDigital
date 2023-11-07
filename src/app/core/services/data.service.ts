import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private data: any;

  public setData(data: any){
    this.data = data;
  }

  getData(){
    return this.data;
  }
}
