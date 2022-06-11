import { Injectable } from '@angular/core';
import {HttpClient, HttpContext, HttpHeaders} from '@angular/common/http' 
import { Observable } from 'rxjs';
import { Point } from '../Point';
import { DistanceResult } from '../DistanceResult';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  private apiUrl = "http://matrixapi-prod.eu-central-1.elasticbeanstalk.com";

   constructor(private http:HttpClient) { }

   getPoints() : Observable<Point[]> {
    console.log("getPotins");
    const url = `${this.apiUrl}/points`;
    return this.http.get<Point[]>(url)
   } 

   deletePoint(point: Point) : Observable<Point>{
    const url = `${this.apiUrl}?id=${point.id}`;
    return this.http.delete<Point>(url);
   }

   addPoint(point: Point) : Observable<Point>{
    const url = `${this.apiUrl}?origin=${point.value}&alias=${point.alias}`;
    return this.http.post<Point>(url,null)
   }

   search(destination: string) : Observable<DistanceResult[]>{
    const url = `${this.apiUrl}?destination=${destination}`;
    return this.http.get<DistanceResult[]>(url);
   }
}
