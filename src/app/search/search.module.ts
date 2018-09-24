import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SearchFormComponent } from './search-form/search-form.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { DataModule } from '../data/data.module';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchService } from './search.service';

@NgModule({
  imports: [
    CommonModule,
    DataModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    SearchFormComponent,
    SearchResultComponent,
    SearchItemComponent
  ],
  exports: [
    SearchFormComponent,
    SearchResultComponent
  ],
  providers: [SearchService]
})
export class SearchModule { }
