import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[] =["John","john@gmail.com","Kajang"]
  info2: string[] =["Kane","kane@gmail.com","Bangsar"]
  info3: string[] =["Swayn","swayn@gmail.com","Putrajaya"]

  getInfo1():string[]{
    return this.info1
  }
  getInfo2():string[]{
    return this.info2
  }
  getInfo3():string[]{
    return this.info3
  }

  addInfo(info: string){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }

  constructor() { }
}
