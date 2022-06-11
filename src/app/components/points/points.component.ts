import { Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';
import { Point } from 'src/app/Point';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {
  points: Point[] = [];
  downloadJsonHref!: SafeUrl;
  constructor(private pointsService: PointsService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.pointsService.getPoints().subscribe((points) => {
      (this.points = points)
      this.generateDownloadJsonUri();
    });
  }

  deletePoint(point: Point) {
    this.pointsService.deletePoint(point).subscribe(() => (this.points = this.points.filter(t => t.id !== point.id)));
  }

  addPoint(point: Point) {
    this.pointsService.addPoint(point).subscribe((point) => (this.points.push(point)))
  }

  generateDownloadJsonUri() {
    var theJSON = JSON.stringify(this.points,null,4);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
  }
}
