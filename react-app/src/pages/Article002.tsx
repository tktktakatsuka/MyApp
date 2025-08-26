import '../styles/article001.css';

export default function Article002() {
  return (
    <div className="menu">
      <div className="">
        <div className="article">
          <div className="row">
            <div className="col-xs-12 col-md-8 ">
              <div className="card h-0 mb-3 mr-3">
                <div className="card-body">
                  <div className="">
                    <h1 id="mainTitle">
                      <p>AngularMaterialの導入から動作確認まで(2024年2月作成)</p>
                    </h1>

                    <h4 id="目次">
                      <p><strong>目次</strong></p>
                    </h4>
                    <ul>
                      <li><a href="#AngularMaterialとは">AngularMaterialとは</a></li>
                      <li><a href="#環境">環境</a></li>
                      <li><a href="#この記事の目標">この記事の目標</a></li>
                      <li><a href="#AngularMaterialをインストール">AngularMaterialをインストール</a></li>
                      <li><a href="#ファイルの編集（TypeScript）">ファイルの編集（TypeScript）</a></li>
                      <li><a href="#ファイルの編集（HTML）">ファイルの編集（HTML）</a></li>
                      <li><a href="#サーバを起動">サーバを起動</a></li>
                    </ul>

                    <br />
                    <h2 id="AngularMaterialとは">AngularMaterialとは</h2>
                    <p>Angular Materialとは, 簡単にHTML上で利用できるUIコンポーネントを提供してくれるライブラリです。ngコマンドで導入できます。</p>

                    <h2 id="環境">環境</h2>
                    <ul>
                      <li>・Windows 10</li>
                      <li>・Angular 17.0</li>
                      <li>・VScode</li>
                    </ul>

                    <h2 id="この記事の目標">この記事の目標</h2>
                    <p>AngularMaterialを使ってトグルの色が変わるUIを作ります。</p>
                    <p>■ボタン押下前</p>
                    <p><img src="/assets/images/002_3.png" alt="before" /></p>
                    <p>■ボタン押下後</p>
                    <p><img src="/assets/images/002_4.png" alt="after" /></p>

                    <h2 id="AngularMaterialをインストール">AngularMaterialをインストール</h2>
                    <p>以下のコマンドを実行します。</p>
                    <p><code>$ ng add -g @angular/material</code></p>
                    <p>実行時の画面例</p>
                    <img src="/assets/images/002_1.png" alt="install" />
                    <p><code>$ npm list</code>で@angular/materialが表示されればOKです。</p>
                    <img src="/assets/images/002_2.png" alt="npm list" />

                    <h2 id="ファイルの編集（TypeScript）">ファイルの編集（TypeScript）</h2>
                    <p>記事001の導入がまだの方は先に実施してください → <a href="/article001">Angularの導入手順</a></p>

                    <h2 id="ファイルの編集（HTML）">ファイルの編集（HTML）</h2>
                    <p>テンプレートにトグルのUIを追加します。</p>

                    <h2 id="サーバを起動">サーバを起動</h2>
                    <p><code>$ cd my-app</code> → <code>$ ng serve</code></p>
                    <p>ブラウザで http://localhost:4200 を開き、トグルが表示されれば完了です。</p>
                    <p><img src="/assets/images/002_5.png" alt="result" /></p>
                    <p>CTRL + C でサーバーを終了します。</p>
                    <p>以上、AngularMaterial導入と動作確認でした。公式: <a href="https://material.angular.io/">Angular Material</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-md-4 ">
              <div className="container mb-6">
                <div className="card-deck ">
                  <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                      <div className="example-card">
                        <div className="img-frame">
                          <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="柴犬の画像" />
                        </div>
                        <div>
                          <p>現役SEしています。Angularを現場で使うことになり、自身の理解力向上の為情報発信を始めました。
                            このサイトもAngular17で作成されています。<br />
                            ラーメンが好き。
                          </p>
                        </div>
                      </div>
                      <div className="alert alert-primary" role="alert" style={{ display: 'none' }}>
                        コピーしました！
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


