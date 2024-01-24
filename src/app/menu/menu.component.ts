import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

interface Food {
  value: string;
  viewValue: string;
}




@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, HttpClientModule],
})



export class MenuComponent {

  constructor(private http: HttpClient) { }

  GET_USERS_API: any;
  userList: any;

  /**
   * ユーザリスト取得関数
   */
  getUserList(): void {
    this.GET_USERS_API = "https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20220601";
    const hash = {
      applicationId: '1061100863725172366',
      genreId: '559887'
    };

    const paramsOptions = <HttpParamsOptions>{ fromObject: hash };
    const params = new HttpParams(paramsOptions);
    // HTTP通信
    this.http.get(this.GET_USERS_API, { params: params }).subscribe(
      // 通信成功　200~299の処理
      (response) => {
        let res = response as { Items: any };
        let items = res['Items'][0];
        // 連想配列のキーと値を繰り返し取得
        for (let key in items) {
          if (items.hasOwnProperty(key)) {
            console.log(`キー：${key}, 値：${items[key]}円`);
          }
        }
        console.log(items);




        let Counter = 0;
        // 取得した商品情報群をループ
        for (let i: number = 0; i < 30; i++) {
          let itemUrl = items['Items'][i];
          console.log(itemUrl);
          let image = items['Items'][i].mediumImageUrls;
          console.log(image);
          let itemName = items['Items'][i].itemName;
          console.log(itemName);
          // let itemUrl = i.Item.itemUrl;               // 商品情報
          // let image = items[Counter].Item.mediumImageUrls[0].imageUrl.replace("ex=128x128", "ex=256x256");
          // let itemName = items[Counter].Item.itemName;

          // $('.example-card').eq(Counter).find('img').attr('src', image);
          // $('.example-card').eq(Counter).find('a').attr('href', itemUrl);
          // $('.example-card').eq(Counter).find('.itemName').find('p').text(itemName);

          Counter++;
        }

        console.log(response);
        // ユーザリストにレスポンスを代入
        this.userList = response;
        return response;
      },
      // 通信失敗時の処理
      (error) => {
        console.error(error);
      }
    );

    // $.ajax({
    //     url: 'https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20220601',
    //     type: 'GET',
    //     data: {
    //         'applicationId': '1061100863725172366',           // アプリID
    //         'genreId': 559887                                 // genreId
    //     }
    // })
    //     .done(function (data:any) {
    //         let items = data.Items;                // 取得した商品情報
    //         console.log(data);


    //         let Counter = 0;
    //         // 取得した商品情報群をループ
    //         for (let i in items) {
    //             let itemUrl = items[Counter].Item.itemUrl;               // 商品情報
    //             let image = items[Counter].Item.mediumImageUrls[0].imageUrl.replace("ex=128x128", "ex=256x256");
    //             let itemName = items[Counter].Item.itemName;

    //             $('.example-card').eq(Counter).find('img').attr('src', image);
    //             $('.example-card').eq(Counter).find('a').attr('href', itemUrl);
    //             $('.example-card').eq(Counter).find('.itemName').find('p').text(itemName);

    //             Counter++;
    //         }
    //     })
    //     .fail(function (data:any) {
    //         console.log(data);
    //         console.log('err');
    //     })
  }

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



