import { Component} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatListModule],
  templateUrl: './article001.component.html',
  styleUrl: './article001.component.css'
})
export class article001Component {
  // ［1］Metaサービスを注入
  constructor(private meta: Meta) {
    // ［2］メタ情報を追加
    this.meta.addTag({
      name: 'description',
      content: 'Angular(17.0)の概要と環境構築の手順を開設します。2024年/2月に更新しています。環境はwindows10,angular17.0です。'
    })
  }

  exeClipbordCopy(idName:any) {
    // data-urlの値を取得
    let copy  = document.getElementById(idName);
    let copyString:any = copy?.textContent;

    // クリップボードにコピー
    navigator.clipboard.writeText(copyString);

    // フラッシュメッセージ表示
    $('.success-msg').fadeIn("slow", function () {
      $(this).delay(2000).fadeOut("slow");
    });

    
  }


}
