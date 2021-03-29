import { Injectable } from '@angular/core';
import { Suspence } from '../shared/suspence';
import { SUSPENCES } from '../shared/suspences';
@Injectable({
  providedIn: 'root'
})
export class SuspenceService {

  constructor() { }
  getSuspences(): Suspence[] {
    return SUSPENCES;
  }

}
