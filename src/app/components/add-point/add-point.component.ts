import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Point } from 'src/app/Point';

@Component({
  selector: 'app-add-point',
  templateUrl: './add-point.component.html',
  styleUrls: ['./add-point.component.css']
})
export class AddPointComponent implements OnInit {
  @Output() onAddPoint : EventEmitter<Point> = new EventEmitter();

  alias!: string;
  origin!: string;
  showAddPoint!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle()
    .subscribe((value) => (this.showAddPoint = value))
   }

  ngOnInit(): void {
  }
  onSubmit()
  {
    if(!this.alias || !this.origin)
    {
      alert("Wpisz coś w te pola");
    }
    const newPoint : Point =
    {
      value: this.origin,
      alias: this.alias
    }
    this.onAddPoint.emit(newPoint);
    this.alias = "";
    this.origin = "";
    
  }
}
