import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { ResultsComponent } from './results/results.component';
import { ResultsBlocComponent } from './results-bloc/results-bloc.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchService } from './search.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent,
    ResultsComponent,
    ResultsBlocComponent,
    SearchResultsComponent

  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
