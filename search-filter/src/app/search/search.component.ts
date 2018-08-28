import { Component, OnInit, OnChanges } from '@angular/core';
import { SearchService } from '../search.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';



@Component({
  selector: 'app-search',
  template: `
   
    <div class="container" >
          <div class="program">
            <h1> Program Catalog </h1>
          </div>
    <div class="control has-icons-left has-icons-right">
      <input [(ngModel)]="search" (keyup)="change()" class="input is-medium is-warning" type="text" placeholder="Search">
         <span class="icon is-right">
           <i class="fas fa-search"></i>
         </span>
     </div> 
    </div >
    <div class="filter">
    <div class='columns'>
        <div class='column is-one-third'>
           <app-filter> </app-filter>
         </div>
     <div class='column'>
         <div class='rows'>
         <app-results> </app-results>
       </div>
     </div>
    </div>
</div>   
  `,
  styles: [
    ` .container{
      width: 50%;
      padding: 5px;
    }
     .program{
      margin: auto;
      width: 50%;
      font-size: 200%;
      font-family:'Titillium Web';  
      padding: 50px;
      text-align: center;
      color: #c49ba8;
    }
    .filter{
      margin-left: 150px;
      margin-top: 80px;
      margin-right: 150px;
    }
    .column{
      margin-left:10px;
    }
    `
  ]
})
export class SearchComponent implements OnInit  {

  constructor(private service: SearchService) { }
  public search = "";
  public simpleObservable;

  ngOnInit() {
    this.service.delete.subscribe(
      e => {
        this.search = "";
      }

    );

  }
  
  change() {
    this.service.searchSearch.next(this.search);
  }
}
