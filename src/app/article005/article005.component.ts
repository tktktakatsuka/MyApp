import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatListModule],
  templateUrl: './article005.component.html',
  styleUrl: './article005.component.css'
})
export class article005Component {
  // ［1］Metaサービスを注入
  constructor(private meta: Meta) {
    // ［2］メタ情報を追加
    this.meta.addTag({
      name: 'description',
      content: 'AngularMaterial(17.0)の概要と環境構築の手順を解説します。2024年/2月に更新しています。環境はwindows10,angular17.0です。'
    })
  }
  appComponentText = "<router-outlet />"

  ngGenerate = "ng generate component chat";


  typeScriptStr = "import { Component } from '@angular/core';\r\n"
    + "import { RouterOutlet } from '@angular/router';\r\n"
    + "import { MatSlideToggleModule } from '@angular/material/slide-toggle';\r\n"
    + "\r\n"
    + "@Component({\r\n"
    + "  selector: 'app-root',\r\n"
    + "  standalone: true,\r\n"
    + "  imports: [RouterOutlet, MatSlideToggleModule,],\r\n"
    + "  templateUrl: './app.component.html',\r\n"
    + "  styleUrl: './app.component.css'\r\n"
    + "})\r\n"
    + "export class AppComponent {\r\n"
    + "  title = 'my-app';\r\n"
    + "}";

  htmltStr = "～～上記は割愛します。ファイルの一番下に下記の記述があると思います。～～\r\n"
    + "<!-- * * * * * * * * * * End of Placeholder  * * * * * * * * * * * * -->\r\n"
    + "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n"
    + "\r\n"
    + "\r\n"
    + "<router-outlet />\r\n"
    + "\r\n"
    + "<!-- ソースコード追加部分 -->\r\n"
    + "<mat-slide-toggle>Toggle me!</mat-slide-toggle>\r\n"
    + "";


  routeTsText = `import { Routes } from '@angular/router';
    import { HomeComponent } from './home/home.component';
    import { ChatComponent } from './chat/chat.component';
    
    export const routes: Routes = [
        { path: 'home', component: HomeComponent }
        ,{ path: 'chat', component: ChatComponent }
    ];
    `

  tsChatText = `import { Component } from '@angular/core';
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
        { userName: 'foo Taro',   content: '３つ目のコメント'}
      ];
    
      setComment() {
        const newComment = { userName: this.userName, content:  this.content };
        this.comments.push(newComment);
      }
    }
    `;
  HTMLChatText = `<div class="chat">
    <h1>チャットアプリ実装</h1>
    
    <ng-container *ngFor="let comment of comments"><!--追加-->
        <p>user : {{comment.userName}}</p>
        <p>messsage : {{comment.content}}</p>
        <br>
    </ng-container>
    
    <div class="">
        <form class="example-form" (submit)="setComment()">
            <mat-form-field class="example-full-width">
                <mat-label>ハンドルネーム</mat-label>
                <input matInput [(ngModel)]="userName" name="userName" placeholder="名前をいれてね">
            </mat-form-field>
    
            <mat-form-field class="mat-form-field">
                <mat-label>ここにコメントを記載してください</mat-label>
                <textarea matInput [(ngModel)]="content" name="content" placeholder="コメントしてね"></textarea>
            </mat-form-field>
    
            <button type="submit" mat-raised-button color="primary">送信</button>
        </form>
    </div>
    </div>`;
  CSSChatText = `h1{
      padding-top: 15px;
  }
  
  .mat-form-field {
      width: 500px;
  }
  
  .example-full-width {
      width: 300px;
  }
  
  input {
      width: 300px;
  }
  
  .example-form {
      flex-direction: column;
      display: flex;
  }
  
  button {
      width: 100px;
      margin-bottom: 10px;
  }
  
  .chat {
      padding-left: 20px;
  }`;
}
