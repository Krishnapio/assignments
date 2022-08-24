import { Component, OnInit, ViewChild } from '@angular/core';

import {FormArray, NgForm } from '@angular/forms';

@Component({
    selector: 'app-tempform',
    templateUrl: './tempform.component.html',
    styleUrls: ['./tempform.component.css']
  })
  export class TempformComponent implements OnInit {
 @ViewChild('userForm') submitForm!: NgForm;
  arrbefore:number[]=[];
  countbefore:number =0;
  value1before: number = 0 ;
  value2before: number = 0 ;
  value3before: number = 0 ;
  value4before: number = 0 ;
  avgbefore=0;

  arrafter:number[]=[];
  countafter:number =0;
  value1after: number = 0 ;
  value2after: number = 0 ;
  value3after: number = 0 ;
  value4after: number = 0 ;
  avgafter= 0;

  avgcomp=0; 
  disabledValue = true;
 
  userForm!: NgForm;
  sumbefore:number =0;
  sumafter:number =0;

  show= false;

  constructor() {
     }
    
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.submitForm);
    this.value1before=this.submitForm.value.value1before;
    this.value2before=this.submitForm.value.value2before;
    this.value3before=this.submitForm.value.value3before;
    this.value4before=this.submitForm.value.value4before;

    this.value1after=this.submitForm.value.value1after;
    this.value2after=this.submitForm.value.value2after;
    this.value3after=this.submitForm.value.value3after;
    this.value4after=this.submitForm.value.value4after;
   
    if(this.value1before!=0)
    {
     this.arrbefore.push(this.submitForm.value.value1before);
       this.countbefore=this.countbefore+1;
    }
    if(this.value2before!=0)
    {
     this.arrbefore.push(this.submitForm.value.value2before);
       this.countbefore=this.countbefore+1;
    }
    if(this.value3before!=0)
    {
     this.arrbefore.push(this.submitForm.value.value3before);
       this.countbefore=this.countbefore+1;
    }
    if(this.value4before!=0)
    {
     this.arrbefore.push(this.submitForm.value.value4before);
       this.countbefore=this.countbefore+1;
    }  

    var sumbefore = this.arrbefore.reduce((acc, cur) => acc + cur, 0);
    console.log(sumbefore);
    this.avgbefore= sumbefore/this.countbefore;
    console.log("avgbefore" + this.avgbefore);



    if(this.value1after!=0)
    {
     this.arrafter.push(this.submitForm.value.value1after);
       this.countafter=this.countafter+1;
    }
    if(this.value2after!=0)
    {
     this.arrafter.push(this.submitForm.value.value2after);
       this.countafter=this.countafter+1;
    }if(this.value3after!=0)
    {
     this.arrafter.push(this.submitForm.value.value3after);
       this.countafter=this.countafter+1;
    }if(this.value4after!=0)
    {
     this.arrafter.push(this.submitForm.value.value4after);
       this.countafter=this.countafter+1;
    }

    var sumafter = this.arrafter.reduce((acc, cur) => acc + cur, 0);
      console.log(sumafter);
      this.avgafter= sumafter/this.countbefore;
      console.log("avgafter" + this.avgafter);
      if(this.avgafter<this.avgbefore){
        this.avgcomp=(this.avgbefore-this.avgafter)/this.avgafter
        this.show=true;
        this.submitForm.reset();
      }
      else
      {
        alert("average after is greater so unable to display compression average try again");
          this.submitForm.reset();
      }
      
    console.log(this.countafter);
    console.log(this.arrafter);
  }
  }