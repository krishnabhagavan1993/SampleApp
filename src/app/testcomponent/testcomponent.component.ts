import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {

  message:string;

  constructor() { 
    this.message="This is a working message from test component"
  }

  ngOnInit() {
  }

}
