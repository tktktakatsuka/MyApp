import '../styles/article001.css';

export default function Article004() {
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
                      <p>Angular(17.0)スピナーを実装する手順</p>
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
                    <h2>Angular(17.0)スピナーを実装する手順</h2>
                    <p>AngularMaterialの公式ページからコピーペーストで簡単に実装できます。手順をまとめます。</p>

                    <h2 id="環境">環境</h2>
                    <ul>
                      <li>・Windows 10</li>
                      <li>・Angular 17.0</li>
                    </ul>

                    <h2 id="Nodeをインストール">Nodeをインストール</h2>
                    <p>Angularのインストールは、Node.jsのパッケージを管理するシステムであるnpmを用いて実施します。※Nodeのインストール方法については、簡単に可能な為、割愛します。</p>

                    <h2>環境</h2>
                    <ul>
                      <li>・Windows 10</li>
                      <li>・Angular 17.0</li>
                      <li>・VScode</li>
                    </ul>

                    <h2>今回の目標</h2>
                    <p>サーバ起動時にスピナーが表示されること</p>
                    <p><code>&lt;mat-spinner /&gt;</code></p>

                    <h2 id="サーバの起動と動作確認">サーバの起動と動作確認</h2>
                    <p>my-appディレクトリに移動します。</p>
                    <p><code>$ cd my-app</code></p>
                    <p>サーバーを起動します。 http://localhost:4200 でブラウザからアクセスします。</p>

                    <p>コンポーネント作成: <code>ng generate component spinner</code></p>
                    <p>実行例</p>
                    <pre><code>CREATE src/app/spinner/spinner.component.html ...</code></pre>
                    <p className="AngularHello"><img src="/assets/images/004_001.png" alt="component追加" /></p>

                    <h2>spinner.component.ts を編集</h2>
                    <p>【MatProgressSpinnerModule】をインポート宣言に追加</p>
                    <pre><code>...spinner.component.ts 変更点...</code></pre>

                    <h2>spinner.component.html を編集</h2>
                    <pre><code>&lt;mat-spinner&gt;&lt;/mat-spinner&gt;</code></pre>

                    <h2>app.component.ts / app.component.html を編集</h2>
                    <pre><code>...app.component.* 変更点...</code></pre>

                    <h2>サーバの起動と動作確認</h2>
                    <div className="highlight">
                      <pre><code>...Application bundle generation complete...
➜  Local:   http://localhost:4200/
                      </code></pre>
                    </div>
                    <p>結果例:</p>
                    <p className="AngularHello"><img src="/assets/images/004_002.png" alt="component追加" /></p>
                    <p>CTRL + C で終了。</p>
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


