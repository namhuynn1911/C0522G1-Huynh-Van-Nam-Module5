import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  dataSendChild = 'Parent To Child';
  eventData: string;

  constructor() { }


  ngOnInit(): void {
  }

  receiveFromChild(value: any) {
    this.eventData = value;
  }
}
