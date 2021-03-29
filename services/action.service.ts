import { Injectable } from '@angular/core';
import {Action} from '../shared/action';
import {ACTIONS} from '../shared/actions';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor() { }

  getActions(): Action[] {
    return ACTIONS;
  }
}
