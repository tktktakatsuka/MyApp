import '../styles/article001.css';

export default function Article001() {
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
                      <p>Angularの導入からサーバー起動まで(2024年2月作成)</p>
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
                    <h2 id="Angularとは">Angularとは</h2>
                    <p>TypeScript, CSS, HTML で実装されたWebアプリケーションフレームワーク。簡単にフロントエンド（web画面）の Web サイトを開発できます。</p>

                    <h2 id="環境">環境</h2>
                    <ul>
                      <li>・Windows 10</li>
                      <li>・Angular 17.0</li>
                    </ul>

                    <h2 id="Nodeをインストール">Nodeをインストール</h2>
                    <p>Angularのインストールは、Node.jsのパッケージを管理するシステムであるnpmを用いて実施します。※Nodeのインストール方法については、簡単に可能な為、割愛します。</p>

                    <h2 id="npmでAngularをインストール">npmでAngularをインストール</h2>
                    <p><code>$ npm install -g @angular/cli</code></p>
                    <p><code>$ ng version</code>でAngularが表示されていればインストール完了です。</p>

                    <h2 id="プロジェクトの作成">プロジェクトの作成</h2>
                    <p>まずはプロジェクトを作成します。</p>
                    <p><code>$ ng new my-app</code></p>
                    <p>コマンドを実行したディレクトリに、my-app というディレクトリができます。</p>

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


