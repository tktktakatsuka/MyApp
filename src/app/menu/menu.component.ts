import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

interface Food {
  value: string;
  viewValue: string;
}

/**
 * @title Basic select
 */


@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
})

export class MenuComponent {
  foods: Food[] = [
    { value: "551177", viewValue: 'メンズファッション' },
    { value: "100433", viewValue: 'インナー・下着・ナイトウェア' },
    { value: "216131", viewValue: 'バッグ・小物・ブランド雑貨' },
    { value: "558885", viewValue: '靴' },
    { value: "558929", viewValue: '腕時計' },
    { value: "216129", viewValue: 'ジュエリー・アクセサリー' },
    { value: "100533", viewValue: 'キッズ・ベビー・マタニティ' },
    { value: "566382", viewValue: 'おもちゃ' },
    { value: "101070", viewValue: 'スポーツ・アウトドア' },
    { value: "562637", viewValue: '家電' },
    { value: "211742", viewValue: 'TV・オーディオ・カメラ' },
    { value: "100026", viewValue: 'パソコン・周辺機器' },
    { value: "564500", viewValue: 'スマートフォン・タブレット' },
    { value: "565004", viewValue: '光回線・モバイル通信' },
    { value: "100227", viewValue: '食品' },
    { value: "551167", viewValue: 'スイーツ・お菓子' },
    { value: "100316", viewValue: '水・ソフトドリンク' },
    { value: "510915", viewValue: 'ビール・洋酒' },
    { value: "510901", viewValue: '日本酒・焼酎' },
    { value: "100804", viewValue: 'インテリア・寝具・収納' },
    { value: "215783", viewValue: '日用品雑貨・文房具・手芸' },
    { value: "558944", viewValue: 'キッチン用品・食器・調理器具' },
    { value: "200162", viewValue: '本・雑誌・コミック' },
    { value: "101240", viewValue: 'CD・DVD' },
    { value: "101205", viewValue: 'テレビゲーム' },
    { value: "101164", viewValue: 'ホビー' },
    { value: "112493", viewValue: '楽器・音響機器' },
    { value: "101114", viewValue: '車・バイク' },
    { value: "503190", viewValue: '車用品・バイク用品' },
    { value: "100939", viewValue: '美容・コスメ・香水' },
    { value: "100938", viewValue: 'ダイエット・健康' },
    { value: "551169", viewValue: '医薬品・コンタクト・介護' },
    { value: "101213", viewValue: 'ペット・ペットグッズ' },
    { value: "100005", viewValue: '花・ガーデン・DIY' },
    { value: "101438", viewValue: 'サービス・リフォーム' },
    { value: "111427", viewValue: '住宅・不動産' },
    { value: "101381", viewValue: 'カタログギフト・チケット' },
    { value: "100000", viewValue: '百貨店・総合通販・ギフト' }
  ];
}



