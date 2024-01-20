$('.get-information').on('click', function () {

$(function () {
    console.log('処理開始');

    $.ajax({
        url: 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601',
        type: 'GET',
        data: {
            'applicationId': '1061100863725172366',           // アプリID
            'genreId': 555086                                 // genreId

        }
    })
        .done(function (data) {
            let items = data.Items;                // 取得した商品情報群
            let itemListHtml = '';                 // 取得した情報からHTMLを構成するための変数

            console.log(data);

            // 取得した商品情報群をループ
            for (let i in items) {
                let item = items[i].Item.itemUrl;               // 商品情報
                itemListHtml += item;
            }

            // itemListHtmlをブラウザ上に表示する
            $('.display-information-wrapper').find('ul').append(itemListHtml);

        })
        .fail(function (data) {
            console.log(data);
            console.log('err');
        })

});

})