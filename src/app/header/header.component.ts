import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  srcElement: any;
  topPos: boolean;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.currentSrcElement.subscribe((srcElement: any): void => {
      if (!srcElement) return;
      this.topPos = (srcElement.scrollTop > 50 && srcElement.scrollHeight > window.screen.height);
    });
  }
}
