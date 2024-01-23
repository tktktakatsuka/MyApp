
$('.getinformation').on('click', function () {
    $(function () {
        console.log('処理開始');

        $.ajax({
            url: 'https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20220601',
            type: 'GET',
            data: {
                'applicationId': '1061100863725172366',           // アプリID
                'genreId': 559887                                 // genreId
            }
        })
            .done(function (data) {
                let items = data.Items;                // 取得した商品情報
                console.log(data);


                let Counter = 0;
                // 取得した商品情報群をループ
                for (let i in items) {
                    let itemUrl = items[Counter].Item.itemUrl;               // 商品情報
                    let image = items[Counter].Item.mediumImageUrls[0].imageUrl.replace("ex=128x128", "ex=256x256");
                    let itemName = items[Counter].Item.itemName;

                    $('.example-card').eq(Counter).find('img').attr('src', image);
                    $('.example-card').eq(Counter).find('a').attr('href', itemUrl);
                    $('.example-card').eq(Counter).find('.itemName').find('p').text(itemName);

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