import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  nametag = 'Student';
  counter = 0;
  list = ['Student','App Developer', 'Data Scientist'];
  constructor() { }

  ngOnInit(): void {
    setInterval(this.assignNameTag.bind(this), 1500);
  }
  assignNameTag() {
    this.nametag = this.list[this.counter];
    this.counter++;
    if(this.counter == (this.list.length)){
      this.counter = 0;
    }
  }
}
