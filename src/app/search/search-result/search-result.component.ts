import { Component, OnInit } from '@angular/core';

import { DataService } from '../../data/data.service';
import { Hotel } from '../../data/hotel';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  filteredHotels: Hotel[];

  constructor(private dataService: DataService, private searchService: SearchService) { }

  ngOnInit() {
    this.dataService.filteredHotels.subscribe(filteredHotels => this.filteredHotels = filteredHotels);
  }
  
  onScroll(event: Event): void {
    this.searchService.setResultScroll(event.srcElement);
  }
}
