import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { AboutService } from 'src/app/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  myData:any;
  myData$: any;

  constructor(private aboutService : AboutService) {

   }

  ngOnInit(): void {
    this.myData$ = this.aboutService.getData();
  }

}
