
import { Component, AfterViewInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-recipe',
  standalone: true,
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatSelectModule,
    MatInputModule, FormsModule, HttpClientModule, CommonModule, MatDividerModule, MatProgressSpinnerModule],
})

export class RecipeComponent implements AfterViewInit {

  constructor(private http: HttpClient) {
    this.getUserList();
  }

  GET_USERS_API: any;

  modalflg: boolean = false;
  itemUrlList: any[] = [];
  itemNameList: any[] = [];
  imageUrlList: any[] = [];
  shopNameList: any[] = [];
  itemPriceList: any[] = [];
  geneId: any;
  syokaiFlg = true;


  onFoodSelectionChange(event: any) {
    this.geneId = event.value;
  }

  /**
   * ユーザリスト取得関数
   */
  getUserList(): void {

    this.GET_USERS_API = "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json";
    const hash = {
      applicationId: "1061100863725172366",
      affiliateId: "30bf3760.a2dfbb1f.30bf3761.e6ea1a7d"
    };

    const paramsOptions = <HttpParamsOptions>{ fromObject: hash };
    const params = new HttpParams(paramsOptions);
    // HTTP通信
    this.http.get(this.GET_USERS_API, { params: params }).subscribe(
      // 通信成功　200~299の処理
      (response) => {
        let res = JSON.stringify(response);
        let parseRes = JSON.parse(res);


        //画面呼び出し時にデータを入れているので初期化する。
        this.itemUrlList = [];
        this.itemNameList = [];
        this.imageUrlList = [];
        this.itemPriceList = [];
        this.shopNameList = [];

        // 取得した商品情報群をループ
        for (let i: number = 0; i < 4; i++) {
          // カードへ設定する配列を設定
          let recipeUrl = parseRes.result[i].recipeUrl;
          this.itemUrlList.push(recipeUrl);
          let recipeCost = parseRes.result[i].recipeCost;
          let recipeIndication = parseRes.result[i].recipeIndication;
          this.itemPriceList.push(recipeCost + "/" + recipeIndication  +"で作れる！" );
          let imageUrl = parseRes.result[i].foodImageUrl;
          if (imageUrl.indexOf('?_ex=128x128')) {
            imageUrl = imageUrl.replace("?_ex=128x128", "_ex=256x256");
          } else {
            imageUrl = imageUrl + "?_ex=256x256";
          }
          this.imageUrlList.push(imageUrl);
          let recipeDescription = parseRes.result[i].recipeDescription;
          this.itemNameList.push(recipeDescription);
          let nickname: String = parseRes.result[i].nickname;
          this.shopNameList.push("ニックネーム　：　" + nickname);
        }
      },
      // 通信失敗時の処理
      (error) => {
        console.error(error);
      }
    );
  }

  foods: Food[] = [
    { value: "", viewValue: '総合ランキング' },
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


  ngAfterViewInit() {
    // if (this.syokaiFlg) {
    //   this.getSyokaiLoad();
    //   this.syokaiFlg = false;
    // }

  }

}



