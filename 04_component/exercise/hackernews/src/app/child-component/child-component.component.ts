import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
@Input()
receiveData: string;


@Output()
eventEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendToParent() {
    this.eventEmitter.emit('con sang cha ok');
  }
}
