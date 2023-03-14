import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  public chatWithUser: string | null = null;
  public users = [
    {
      userName: "Cesiut",
      image: "https://www.w3schools.com/howto/img_avatar.png"
    },
    {
      userName: "Grzesiu",
      image: ""
    },
    {
      userName: "Wesiu",
      image: ""
    },
    {
      userName: "Desiut",
      image: ""
    },
    {
      userName: "Lesiu",
      image: ""
    },
  ];

  public test(): void{
console.log(this.chatWithUser);
  }

  constructor(){
  this.chatWithUser = this.users[1].userName;
  }
}
