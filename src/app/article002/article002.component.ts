import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatListModule],
  templateUrl: './article002.component.html',
  styleUrl: './article002.component.css'
})
export class article002Component {
    // ［1］Metaサービスを注入
    constructor(private meta: Meta) {
      // ［2］メタ情報を追加
      this.meta.addTag({
        name: 'description',
        content: 'AngularMaterial(17.0)の概要と環境構築の手順を解説します。2024年/2月に更新しています。環境はwindows10,angular17.0です。'
      })
    }

    
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
    
}
