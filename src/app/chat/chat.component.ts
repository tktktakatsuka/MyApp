import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatIconModule, MatDividerModule, MatButtonModule, MatGridListModule,],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})


export class ChatComponent {
  content = '';
  comment = '初期値';


  dispComment(content: string) {
    this.comment = content;
  }
}
