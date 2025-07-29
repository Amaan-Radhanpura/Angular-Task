import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  detail:user={
  Name :'',
  Email:'',
  phonenumber:0}

  display:boolean=false;
  onclick(){
    this.display=!this.display
  }
  form(){
    console.log(this.detail);
  }
}

export interface user{
  Name:string;
  Email:string;
  phonenumber:number;
}
