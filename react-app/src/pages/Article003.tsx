import '../styles/article001.css';

export default function Article003() {
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
                      <p>Angular ページを増やす方法（コンポーネントの追加）</p>
                    </h1>
                    <h4 id="目次">
                      <p><strong>目次</strong></p>
                    </h4>
                    <ul>
                      <li><a href="#Angularとは">Angularとは</a></li>
                      <li><a href="#環境">環境</a></li>
                      <li><a href="#Nodeをインストール">Nodeをインストール</a></li>
                      <li><a href="#npmでAngularをインストール">npmでAngularをインストール</a></li>
                      <li><a href="#プロジェクトの作成">プロジェクトの作成</a></li>
                      <li><a href="#サーバの起動と動作確認">サーバの起動と動作確認</a></li>
                    </ul>

                    <br />
                    <h2>Angularのページを増やす方法</h2>
                    <p>コンポーネント（HTML、CSS、TypeScript）を追加することでページを増やせます。ここでは手順をまとめます。</p>

                    <h2 id="環境">環境</h2>
                    <ul>
                      <li>・Windows 10</li>
                      <li>・Angular 17.0</li>
                    </ul>

                    <h2>コンポーネントの作成手順</h2>
                    <p>プロジェクトのディレクトリに移動し、次を実行:</p>
                    <p><code>ng generate component home</code></p>
                    <p>実行例:</p>
                    <p className="AngularHello"><img src="/assets/images/003_001.png" alt="component追加" /></p>

                    <h2>app.routes.tsを更新</h2>
                    <p>【path】を追加して新規コンポーネントへルーティングします。</p>

                    <h2 id="サーバの起動と動作確認">サーバの起動と動作確認</h2>
                    <p><code>$ cd my-app</code> → <code>$ ng serve</code></p>
                    <p>以下のように表示されればOKです。</p>
                    <div className="highlight">
                      <pre><code>...Application bundle generation complete...
➜  Local:   http://localhost:4200/
                      </code></pre>
                    </div>
                    <p>表示例:</p>
                    <p className="AngularHello"><img src="/assets/images/003_002.png" alt="component追加" /></p>
                    <p><code>http://localhost:4200/home</code> にアクセスすると "home works!" が表示されます。</p>
                    <p>【path】は app.routes.ts の設定に一致します。router-outlet の位置に描画されます。</p>
                    <p>CTRL + C で終了。</p>
                    <p>以上、Angular(17.0)でコンポーネントを追加する手順でした。</p>

                    <h2 id="サーバの起動と動作確認">サーバの起動と動作確認</h2>
                    <p>my-appディレクトリに移動します。</p>
                    <p><code>$ cd my-app</code></p>
                    <p>サーバーを起動します。 http://localhost:4200 でブラウザからアクセスします。</p>

                    <img src="/assets/images/AngularHello.png" alt="Angulartest" />
                    <p>CTRL + C でサーバーを終了します。</p>
                    <p>ここまでが導入からテストサーバーの起動までの解説となります。</p>
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


