import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GisfPageComponent } from './gisf-page/gisf-page.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    GisfPageComponent,
    ResultsComponent,
    SearchComponent
  ],
  exports: [
    GisfPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
