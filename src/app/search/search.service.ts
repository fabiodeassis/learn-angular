import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class SearchService {

  private srcElement = new BehaviorSubject(undefined);
  currentSrcElement = this.srcElement.asObservable();

  constructor() { }

  setResultScroll(srcElement: any) {
    this.srcElement.next(srcElement);
  }

  getResultScroll() {
    return this.currentSrcElement;
  }
}