import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('https://superfacilapp.appspot.com/')
    .subscribe(data => {
      console.log(data);
    })
  }

}
