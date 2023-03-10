import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  icons: AuthIcon[] = [
    {
      text: "Instagram",
      faClass: "fa-instagram"
    },
    {
      text: "YouTube",
      faClass: "fa-youtube"
    },
    {
      text: "Twitter",
      faClass: "fa-twitter"
    }
  ];

}

interface AuthIcon{
  text: string;
  faClass: string;
}