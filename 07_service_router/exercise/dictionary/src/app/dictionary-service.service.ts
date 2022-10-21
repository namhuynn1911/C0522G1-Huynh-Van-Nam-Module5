import { Injectable } from '@angular/core';
import {IWord} from "./iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  dictionList = new Array();

  finByWord(name: string):IWord{
    return this.dictionList.find(item => item.word === name);
  }

  findAll(): IWord[] {
    return this.dictionList;
  }

  constructor() {
    this.dictionList.push({word: 'Banana', mean: 'Quả chuối'});
    this.dictionList.push({word: 'Apple', mean: 'Quả Táo'});
    this.dictionList.push({word: 'Cherry', mean: 'Quả Cherry'});
  }
}
