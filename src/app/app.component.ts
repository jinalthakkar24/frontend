import { Component } from '@angular/core';
import { of } from 'rxjs';
import { mergeMap,map, groupBy, reduce } from 'rxjs/operators';
   

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coruscate';
  tempArr:any;
  myArr=[];
  cnt:number=0;
  custArr = [];
  display:any=[];
  check:any=[];
  gr:string ="department";
  onSubmit(group) {
  this.gdata=[];
  this.perArr=[];
  this.cntarr=[];
    this.gr=group.groupData;
    console.log(this.gr);
    this.getData(this.gr);
  }
  
  
  data = [
    {
    "id": 1,
    "firstName": "David",
    "lastName": "Wallace",
    "department": "Mobile",
    "salarySlab": "High",
    "city": "New York",
    "country": "US"
    },
    {
    "id": 2,
    "firstName": "Sonia",
    "lastName": "Ross",
    "department": "Web",
    "salarySlab": "Low",
    "city": "Texas",
    "country": "US"
    },
    {
    "id": 3,
    "firstName": "Anthony",
    "lastName": "Thomson",
    "department": "Web",
    "salarySlab": "High",
    "city": "London",
    "country": "UK"
    },
    {
    "id": 4,
    "firstName": "John",
    "lastName": "Duo",
    "department": "Web",
    "salarySlab": "Low",
    "city": "Liverpool",
    "country": "UK"
    }
    ];
   len:number=this.data.length;
   per:number=0;
   datas:string;
   perArr:any=[];
   cntarr:any=[];
   gdata:any=[];
    
   
    constructor() { 
      this.getData(this.gr);
    }

  
    getData(group:any){

      of(
        // Api Data
        {
          "id": 1,
          "firstName": "David",
          "lastName": "Wallace",
          "department": "Mobile",
          "salarySlab": "High",
          "city": "New York",
          "country": "US"
          },
          {
          "id": 2,
          "firstName": "Sonia",
          "lastName": "Ross",
          "department": "Web",
          "salarySlab": "Low",
          "city": "Texas",
          "country": "US"
          },
          {
          "id": 3,
          "firstName": "Anthony",
          "lastName": "Thomson",
          "department": "Web",
          "salarySlab": "High",
          "city": "London",
          "country": "UK"
          },
          {
          "id": 4,
          "firstName": "John",
          "lastName": "Duo",
          "department": "Web",
          "salarySlab": "Low",
          "city": "Liverpool",
          "country": "UK"
          }
      ).pipe(
        //code of groupby and mergemap
        groupBy(p => p[this.gr]),
        mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], []))),
      )
        

      .subscribe(p =>
        
        {
          //output of groupby data and logic
          this.custArr = [];
          console.log("LEN:"+ p[0][this.gr]);
         
          this.cntarr.push(p.length);
          this.per= p.length*100/this.len;
         
          this.perArr.push(this.per);
          
          this.gdata.push(p[0][this.gr]);
                
        }
        );
        console.log("Avya ke"+this.per+this.perArr+this.cntarr+this.gdata);''
        console.log("aa:"+this.myArr); 
        console.log("Percentage: "+this.perArr);
        console.log("Department: "+this.gdata);
        console.log("count: "+this.cntarr);
        this.tempArr = this.myArr;
    }
   
}
