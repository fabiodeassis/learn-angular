import { Component } from '@angular/core';
import { DataService } from '../../data/data.service';
import { Hotel } from '../../data/hotel';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  search: string;
  showPreview: boolean = false;
  previewList: Hotel[];
  previewLimit: number;

  constructor(private dataService: DataService) {
    this.search = "";
    this.previewList = [];
    this.previewLimit = 5;
  }

  onSubmit(): void {
    if (!this.search) return;
    this.showPreview = false;
    this.previewLimit = 5;
    this.dataService.getHotels(this.search);
  }

  onKey(event: KeyboardEvent): void {
    const key = event.keyCode || event.which;
    if (!this.search) return;
    
    this.dataService.getPreviewHotels(this.search)
      .subscribe((data: Hotel[]) => {
        this.previewList = data.filter(
          (value:Hotel) => (value.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0)
        );
        
        /**
         * TODO
         * Create a Pipe to filter all inutil keys:
         */
        const ignoredKeys = {
          // "8": "Delete",
          "13": "Enter",
          // "16": "Shift",
          "17": "Ctrl",
          "18": "Alt/Option",
          "20": "CapsLock (Keydown to Lower / Keyup to Upper)",
          "27": "Esc",
          "91": "Command (Left)",
          "93": "Command (Right)"
        }
        this.showPreview = (!ignoredKeys[key]);
        this.previewLimit = (!ignoredKeys[key]) ? this.previewLimit : 5;
      });

      /* FIXME
      this.data.getPreviewHotels(this.search)
        .subscribe((data: Hotel[]) => this.previewList = data);
      */
  }

  itemClick(value: string): void {
    this.search = value;
    this.showPreview = false;
    this.previewLimit = 5;
  }

  increaseLimit() {
    this.previewLimit += 3;
  }
}
