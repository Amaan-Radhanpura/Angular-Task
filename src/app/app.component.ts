import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
 constructor(private snackbar: MatSnackBar){}
  // details:user[]=[{'Name':'Amaan','Email':'amaanradhanpura5@gmail.com','phonenumber':9426772238},
  //   {'Name':'Amaan','Email':'amaanradhanpura5@gmail.com','phonenumber':9426772238},
  //   {'Name':'Amaan','Email':'amaanradhanpura5@gmail.com','phonenumber':9426772238},
  //   {'Name':'Amaan','Email':'amaanradhanpura5@gmail.com','phonenumber':9426772238},
  //   {'Name':'Amaan','Email':'amaanradhanpura5@gmail.com','phonenumber':9426772238}
  // ]
  details:user[]=[];
 
  login = {
    Name:"",
    Email:"",
    phonenumber:0
  };

  onsubmit(){
    this.details.push({...this.login});
    this.snackbar.open('Registered','close');
    console.log(this.details);
  }

  search:string='';

  display:boolean=false;
  onclick(){
    this.display=!this.display
  }

  oninput(event:any){
    this.search=event.target.value
  }
}

export interface user{
  Name:string;
  Email:string;
  phonenumber:number;
}
