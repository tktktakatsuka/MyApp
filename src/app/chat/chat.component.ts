import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})


export class ChatComponent {
  content     = '';
  userName    = '';

  comments: { userName: string, content: string }[] = [
    { userName: 'hoge Taro',  content: '１つ目のコメント'},
    { userName: 'piyo Taro',  content: '２つ目のコメント'},
    { userName: 'foo Taro',  content: '３つ目のコメント'}
  ];

  constructor(){ 
  }

  setComment() {
    const newComment = { userName: this.userName, content:  this.content };
    this.comments.push(newComment);
  }
}
