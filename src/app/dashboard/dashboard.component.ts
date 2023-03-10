import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  menuIcons: LeftMenuIcon[] =[
    {
      faClass: "fa-instagram"
    },
    {
      faClass: "fa-facebook"
    },
    {
      faClass: "fa-instagram"
    },
    {
      faClass: "fa-instagram"
    },
    {
      faClass: "fa-instagram"
    },
    {
      faClass: "fa-instagram"
    },
    {
      faClass: "fa-facebook"
    }
    
  ];
  }

interface LeftMenuIcon{
  faClass: string;
}