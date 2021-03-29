import { Component, OnInit } from '@angular/core';
import {Action} from '../shared/action';
import { ActionService } from '../services/action.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  actions: Action[] ;

  constructor(private actionService: ActionService) { }
  
  ngOnInit() {
    this.actions = this.actionService.getActions();
  }

}
