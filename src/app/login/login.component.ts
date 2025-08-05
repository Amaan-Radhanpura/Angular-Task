import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 constructor(private snackbar: MatSnackBar, private router:Router){}

  details:user[]=[];
  filtered:user[] = [];
 
   display:boolean=false;
  login:user = {
    Name:"",
    Email:"",
    phonenumber:0
  };

  onsubmit(form:NgForm){
    if(form.invalid){
      this.snackbar.open('please fill out all the details','Dismiss');
      return;
    }
    else{
    console.log(form.value)
    this.details.push({...this.login});
    this.filtered = this.details
    this.snackbar.open('Registered','close');
    console.log(this.filtered)
    }
  }

  search:any='';

 

  onclick(){
    this.display=!this.display
  }

  oninput(event:any){
    this.search=event.target.value
    console.log(event)
    this.filtered = this.details.filter((item)=>(
      item.Name.toLowerCase().includes(this.search.toLowerCase()) ||
      item.Email.toLowerCase().includes(this.search.toLocaleLowerCase()) 
    ))
  }
}

export interface user{
  Name:string;
  Email:string;
  phonenumber:number;
}