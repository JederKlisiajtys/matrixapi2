import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddPoint : boolean = false;
  private subject = new Subject<any>();

  constructor() { }


  toggleAddPoint() : void
  {
    this.showAddPoint = !this.showAddPoint;
    this.subject.next(this.showAddPoint);
  }

  onToggle() : Observable<any> {
    return this.subject.asObservable();
  }
}
