import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from './hotel';

@Injectable()
export class DataService {

  private hotels = new BehaviorSubject(undefined);
  filteredHotels = this.hotels.asObservable();

  constructor(private http: HttpClient) { }

  getHotels (search: string): void {
    this.getPreviewHotels(search)
      .subscribe((data: Hotel[]) => {
        this.hotels.next(data.filter(
          (value:Hotel) => (value.name.toLowerCase().indexOf(search.toLowerCase()) >= 0)
        ));
      });
  }

  getPreviewHotels (search: string): Observable<Object> {
    // TODO needs filter hotels using "search" as param
    return this.http.get(`assets/hotels.json?filter=${search}`);  
  }
}