import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Data } from 'src/app/model/data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'AngularHttpRequest';
  allData: Data[]=[];
  isFetching:boolean=false;
  editMode: boolean = false;
  currentProductId : string;
  
  @ViewChild('productsForm')form: NgForm;

  formFields = {
    field1: 'the rock!',
    field2: '012345',
    field3: 'rock@gmail.com'
  };

  onDataCreate(){
    if(!this.editMode){
    
    console.log(this.formFields)
    const headers = new HttpHeaders({'myHeader':'user'})
    this.http.post<{name: string}>('http://localhost:3000/posts', this.formFields, {headers:headers})
    .subscribe(()=> this.fetchData());
  } else {
    this.updateData
  }
  }

  updateData(id: string, value: Data ){
    this.http.put(`http://localhost:3000/posts/${id}`,value)
    .subscribe();
  }


  onDeleteData(id:string){
    this.http.delete(`http://localhost:3000/posts/${id}`)
    .subscribe(() => this.fetchData());
  }

  onEditClicked(id:string){
    this,this.currentProductId = id;
    //Get the product 
    let currentData = this.allData.find((d)=>{return d.id === id});
    // console.log(currentData);

    //Populate the form with the product details
    this.form.setValue({
      name: currentData.name,
      email:currentData.email,
      mobile:currentData.mobile
    })

    //Change the button value to update product
    this.editMode = true;
  }



  private fetchData(){
    this.http.get<Data[]>('http://localhost:3000/posts')
    .subscribe((data: Data[])=>{
      console.log(data);
      this.allData = data;
    })
  }

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  onDataFetch(){
    this.fetchData();
  }

}
