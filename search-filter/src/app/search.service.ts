import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';



@Injectable()
export class SearchService {
  public url :string="/assets/data/data.json";
  constructor() { }
    searchFilter=new Subject();
     institutsSelect=new Subject();
     institutsDelete=new Subject();
     concoursSelect=new Subject();
     concoursDelete=new Subject();
     matieresSelect=new Subject();
     matieresDelete=new Subject();


 


     searchSearch=new Subject();
     delete=new Subject();
     deleteChecked=new Subject();
     searchDelete=new Subject();

    
    
    
}


