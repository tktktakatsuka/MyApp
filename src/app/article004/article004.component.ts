import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';//追加

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatProgressSpinnerModule],
  templateUrl: './article004.component.html',
  styleUrl: './article004.component.css'
})
export class article004Component {
  // ［1］Metaサービスを注入
  constructor(private meta: Meta) {
    // ［2］メタ情報を追加
    this.meta.addTag({
      name: 'description',
      content: 'Angular ページを増やす方法（コンポーネントの追加）を解説します。2024年/2月に更新しています。環境はwindows10,angular17.0です。'
    })
  }

  spinnerTsText = ""
    + "import { Component } from '@angular/core';\r\n"
    + "import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';//この行を追加\r\n"
    + "\r\n"
    + "\r\n"
    + "@Component({\r\n"
    + "  selector: 'app-spinner',\r\n"
    + "  standalone: true,\r\n"
    + "  imports: [MatProgressSpinnerModule],//MatProgressSpinnerModuleを追加\r\n"
    + "  templateUrl: './spinner.component.html',\r\n"
    + "  styleUrl: './spinner.component.css'\r\n"
    + "})\r\n"
    + "export class SpinnerComponent {\r\n"
    + "\r\n"
    + "}\r\n"
    + "";

  spinnerHtmlText = ""
    + "<p>spinner works!</p>\r\n"
    + "<mat-spinner></mat-spinner>\r\n"
    + "\r\n"
    + "";

  appComponentText =  ""
  + "import { Component } from '@angular/core';\r\n"
  + "import { RouterOutlet } from '@angular/router';\r\n"
  + "import { MatSlideToggleModule } from '@angular/material/slide-toggle';\r\n"
  + "import { SpinnerComponent } from './spinner/spinner.component';//この行を追加\r\n"
  + "\r\n"
  + "@Component({\r\n"
  + "  selector: 'app-root',\r\n"
  + "  standalone: true,\r\n"
  + "  imports: [RouterOutlet, MatSlideToggleModule, SpinnerComponent],//この行にSpinnerComponentを追加\r\n"
  + "  templateUrl: './app.component.html',\r\n"
  + "  styleUrl: './app.component.css'\r\n"
  + "})\r\n"
  + "export class AppComponent {\r\n"
  + "  title = 'my-app';\r\n"
  + "}\r\n"
  + "";

  htmltStr = "～～上記は割愛します。ファイルの一番下に下記の記述があると思います。～～\r\n"
  + "<!-- * * * * * * * * * * End of Placeholder  * * * * * * * * * * * * -->\r\n"
  + "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n"
  + "\r\n"
  + "\r\n"
  + "<router-outlet />\r\n"
  + "\r\n"
  + "<!--スピナー追加-->\r\n"
  + "<app-spinner></app-spinner>\r\n"
  + "";

}

