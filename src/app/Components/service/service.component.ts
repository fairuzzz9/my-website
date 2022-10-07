import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service'
 


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  providers:[DataService]
})
export class ServiceComponent implements OnInit {

 infoService1 : string[]=[];
 infoService2 : string[]=[];
 infoService3 : string[]=[];

 getInfo1(){
  this.infoService1 = this.dservice.getInfo1();
 }
 getInfo2(){
  this.infoService2 = this.dservice.getInfo2();
 }
 getInfo3(){
  this.infoService3 = this.dservice.getInfo2()
 }

  constructor(private dservice: DataService) { }

  ngOnInit(): void {
    
  }
  updateInfo(frm: any){
    this.dservice.addInfo(frm.value.location)
  }

  
}
