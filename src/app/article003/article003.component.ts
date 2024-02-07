import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './article003.component.html',
  styleUrl: './article003.component.css'
})
export class article003Component {
  // ［1］Metaサービスを注入
  constructor(private meta: Meta) {
    // ［2］メタ情報を追加
    this.meta.addTag({
      name: 'description',
      content: 'Angular ページを増やす方法（コンポーネントの追加）を解説します。2024年/2月に更新しています。環境はwindows10,angular17.0です。'
    })
  }

  routeText = ""
    + "import { Routes } from '@angular/router';\r\n"
    + "import { HomeComponent } from './home/home.component';\r\n"
    + "\r\n"
    + "export const routes: Routes = [\r\n"
    + "    { path: 'home', component: HomeComponent }\r\n"
    + "];\r\n"
    + "";;

  outlet = ""
    + "<router-outlet />";


}
