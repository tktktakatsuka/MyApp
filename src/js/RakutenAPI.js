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
            let items = data.Items;                // 取得した商品情報
            console.log(data);


            let Counter = 1;
            // 取得した商品情報群をループ
            for (let i in items) {
                let itemUrl = items[i].Item.itemUrl;               // 商品情報
                let image = items[i].Item.mediumImageUrls[0].imageUrl;    
                let itemName = items[i].Item.itemName;    

                $('.example-card').eq(i).find('img').attr('src', image);
                $('.example-card').eq(i).find('a').attr('href', itemUrl);
                $('.example-card').eq(i).find('.itemName').find('p').text(itemName);

                Counter++;
            }

            // itemListHtmlをブラウザ上に表示する


        })
        .fail(function (data) {
            console.log(data);
            console.log('err');
        })

});

})