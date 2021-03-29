import { Component, OnInit } from '@angular/core';
import {Suspence} from '../shared/suspence';
import { SuspenceService } from '../services/suspence.service';
@Component({
  selector: 'app-suspence',
  templateUrl: './suspence.component.html',
  styleUrls: ['./suspence.component.scss']
})
export class SuspenceComponent implements OnInit {

  suspences: Suspence[] ;

  constructor(private suspenceService: SuspenceService) { }
  
  ngOnInit() {
    this.suspences = this.suspenceService.getSuspences();
  }

}
