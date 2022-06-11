import { Component, Input, OnInit } from '@angular/core';
import { DistanceResult } from 'src/app/DistanceResult';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent implements OnInit {
  @Input() distance!: DistanceResult; 

  constructor() { }

  ngOnInit(): void {
  }

}
