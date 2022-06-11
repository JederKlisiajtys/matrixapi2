import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DistanceResult } from 'src/app/DistanceResult';
import { PointsService } from 'src/app/services/points.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchQuery!: string;
  result!: DistanceResult[];
  showAddPoint!: boolean;
  subscription!: Subscription;

  constructor(private pointsService:PointsService, private uiService:UiService) { 
    this.subscription = this.uiService.onToggle()
    .subscribe((value) => (this.showAddPoint = value))
  }

  ngOnInit(): void {
  }

  onSearch()
  {
    if(this.searchQuery !== '')
    {
      this.pointsService.search(this.searchQuery).subscribe((points) => (this.result = points));
    }
  }

}
