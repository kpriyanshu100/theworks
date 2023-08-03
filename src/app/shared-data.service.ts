import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }
  inputValue: BehaviorSubject<string> = new BehaviorSubject<string>('hello');
}
