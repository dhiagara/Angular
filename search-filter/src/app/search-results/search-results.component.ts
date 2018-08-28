import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(private service:SearchService) { }
  public results=[];
  public instituts=[];
  public concours=[];
  public matieres=[];

  public res='';
  public test=true;
  ngOnInit() {  
    this.service.searchFilter.subscribe(
      (value) =>{
        this.results.forEach((t)=>{
          if(t===value)
            this.test=false;
       });
        if(this.test) {  
          this.results.push(value);
        }
        this.test=true;
      });
      this.service.searchSearch.subscribe(
        (value) =>{
            this.res=<string>value;
        });
        this.service.searchDelete.subscribe(
          (value)=>{
            for(var i=0;i<this.results.length;i++){
                if(this.results[i]===value){
                  this.results.splice(i,1);
                }
            } 
          }); 
          this.service.institutsSelect.subscribe(
            (value)=>{
              this.instituts.forEach((t)=>{
                if(t===value){
                  this.test=false;
                }
             });
              if(this.test) {  
                this.results.push(value);
                this.instituts.push(value);
                console.log(this.instituts);
              }
              this.test=true;
            }
          )
          
          this.service.concoursSelect.subscribe(
            (value)=>{
              this.concours.forEach((t)=>{
                if(t===value)
                  this.test=false;
             });
              if(this.test) {  
                this.results.push(value);
                this.concours.push(value);
                console.log(this.concours);
              }
              this.test=true;
            }
            
          )
          this.service.matieresSelect.subscribe(
            (value)=>{
              this.matieres.forEach((t)=>{
                if(t===value)
                  this.test=false;
             });
              if(this.test) {  
                this.results.push(value);
                this.matieres.push(value);
              console.log(this.matieres);
              }
              this.test=true;
            }
          )
          this.service.institutsDelete.subscribe(
            (value)=>{
              this.results=this.results.filter(t=> t!==value);
              this.instituts=this.instituts.filter(t=> t!==value);
                      console.log(this.instituts);
            }); 
            this.service.concoursDelete.subscribe(
              (value)=>{
                this.results=this.results.filter(t=> t!==value);
              this.concours=this.concours.filter(t=> t!==value);
                      console.log(this.concours);
                
                    }
                 
              ); 
              this.service.matieresDelete.subscribe(
                (value)=>{
                  this.results=this.results.filter(t=> t!==value);
                  this.matieres=this.matieres.filter(t=> t!==value);
                          console.log(this.matieres);

                  
                }); 

  }
  delete(value,i){//delete when we press'x'
    this.instituts=this.instituts.filter(t=> t!==value);
    this.matieres=this.matieres.filter(t=> t!==value);
    this.concours=this.concours.filter(t=> t!==value);
    this.results.splice(i,1);
    this.service.deleteChecked.next(value);
  }
  deleteRes(){//delete de la zone de text
    this.res='';
    this.service.delete.next();
  }
}
