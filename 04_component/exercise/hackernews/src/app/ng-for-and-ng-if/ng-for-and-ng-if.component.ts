import { Component, OnInit } from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-ng-for-and-ng-if',
  templateUrl: './ng-for-and-ng-if.component.html',
  styleUrls: ['./ng-for-and-ng-if.component.css']
})
export class NgForAndNgIfComponent implements OnInit {
  studentList = [];

  constructor() { }

  ngOnInit(): void {
    this.studentList.push(new Student(
      1, 'huỳnh văn nam', '1993-11-19', 1));
    this.studentList.push(new Student(
      2, 'Nguyễn văn phúc', '1998-11-19', 1));
    this.studentList.push(new Student(
      1, 'Nguyễn ngọc huy', '1998-9-19', 0));
  }

}
