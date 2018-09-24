import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../data/hotel';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  @Input('item') hotel: Hotel;
  open: boolean;
  constructor() { }

  ngOnInit() {
  }

}
