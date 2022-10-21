import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from "../dictionary-service.service";
import {IWord} from "../iword";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail-component',
  templateUrl: './dictionary-detail-component.component.html',
  styleUrls: ['./dictionary-detail-component.component.css']
})
export class DictionaryDetailComponentComponent implements OnInit {
  dictionaryList: IWord;
  constructor(private dic: DictionaryServiceService,
              private active: ActivatedRoute) { }

  ngOnInit(): void {
    const name = this.active.snapshot.params.word;
    this.dictionaryList = this.dic.finByWord(name);
  }

}
