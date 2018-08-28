import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private service:SearchService) { }
 
  
  
public matieres=[
   {
      "checked":false,"name":"Mathématique"
   } ,
   {
    "checked":false,"name":"Physique"
 } ,  
 {
  "checked":false,"name":"Chimie"
} ,
{
  "checked":false,"name":"Informatique"
} ,

{
  "checked":false,"name":"STI"
} 



];
public instituts=[
   {
      "checked":false,"name":"IPEIM"
   } ,
   {
    "checked":false,"name":"EPI"
 } ,  
 {
  "checked":false,"name":"Esprim"
} 
]
public concours=[
  {
     "checked":false,"name":"Fr"
  } ,
  {
   "checked":false,"name":"Tn"
} ,  
{
 "checked":false,"name":"???"
} 
]
  ngOnInit() { 
    this.service.deleteChecked.subscribe(
      (value)=>{
        this.instituts.forEach((t)=>{
          if(t.name===value){
            t.checked=false;  
          }});
          this.concours.forEach((t)=>{
            if(t.name===value){
              t.checked=false;  
            }});
            this.matieres.forEach((t)=>{
              if(t.name===value){
                t.checked=false;  
              }});
      }
    )
  }
    
  filtrate(value){
   
        this.service.searchFilter.next(value);
}

filtrateInstitut(value,i){
  
  this.instituts[i].checked=!this.instituts[i].checked;
  if(this.instituts[i].checked){
      this.service.institutsSelect.next(value);
    }
        else{
          this.service.institutsDelete.next(value);
        }
      }
      filtrateMatiere(value,i){
        this.matieres[i].checked=!this.matieres[i].checked;
        if(this.matieres[i].checked){
            this.service.matieresSelect.next(value);}
              else{
                this.service.matieresDelete.next(value);
              }
            }
            filtrateConcour(value,i){
            
              this.concours[i].checked=!this.concours[i].checked;
              if(this.concours[i].checked){
                  this.service.concoursSelect.next(value);}
                    else{
                      this.service.concoursDelete.next(value);

                    }
                  }
    }
