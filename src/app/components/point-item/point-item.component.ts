import { Component, OnInit,Input,Output, EventEmitter  } from '@angular/core';
import { Point } from 'src/app/Point';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-point-item',
  templateUrl: './point-item.component.html',
  styleUrls: ['./point-item.component.css']
})
export class PointItemComponent implements OnInit {
  @Input() point!: Point; 
  @Output() onDeletePoint: EventEmitter<Point> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(point: Point)
  {
    this.onDeletePoint.emit(point);
  }
}
