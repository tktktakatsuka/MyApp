import '../styles/article001.css';

export default function Article005() {
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
                      <p>Angular(17.0)で作成したフォームを送信し、画面に表示する方法(チャットアプリを例題に)</p>
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
                    <h4 id="目次">
                      <p><strong>目次</strong></p>
                    </h4>
                    <ul>
                      <li><a href="#Angular(17.0)でフォームを送信し、画面に出力する方法">Angular(17.0)でフォームを送信し、画面に出力する方法</a></li>
                      <li><a href="#動作環境">動作環境</a></li>
                      <li><a href="#この記事の目標">この記事の目標</a></li>
                      <li><a href="#事前準備">事前準備</a></li>
                      <li><a href="#コンポーネントの追加">コンポーネントの追加</a></li>
                      <li><a href="#ルーティングの追加">ルーティングの追加</a></li>
                      <li><a href="#HTML、CSS、TSを実装する">HTML、CSS、TSを実装する</a></li>
                      <li><a href="#サーバを起動">サーバを起動</a></li>
                      <li><a href="#ソースコードの解説">ソースコードの解説</a></li>
                      <li><a href="#課題">課題</a></li>
                    </ul>

                    <h2 id="Angular(17.0)でフォームを送信し、画面に出力する方法">Angular(17.0)でフォームを送信し、画面に出力する方法</h2>
                    <p>ディレクティブ <code>ngModel</code> を使って双方向バインディングし、入力値を画面へ表示します。簡易Chatを例に解説します。</p>

                    <h2 id="動作環境">動作環境</h2>
                    <ul>
                      <li>・Windows 10</li>
                      <li>・Angular 17.0</li>
                      <li>・AngularMaterial 17.0</li>
                      <li>・VScode</li>
                    </ul>

                    <h2 id="この記事の目標">この記事の目標</h2>
                    <p>入力フォームへ入力した値を画面に表示させることです。<a href="/chat">実装後の画面はこちら</a></p>

                    <h2 id="事前準備">事前準備</h2>
                    <ul>
                      <li><a href="/article001">・Angularの環境構築の手順</a></li>
                      <li><a href="/article002">・AngularMaterialのインストール手順</a></li>
                    </ul>
                    <p>任意: <a href="/article003">コンポーネント追加手順</a></p>

                    <h2 id="コンポーネントの追加">コンポーネントの追加</h2>
                    <p>ルートで次を実行してChatコンポーネントを作成:</p>
                    <p><code>ng generate component chat</code></p>
                    <p>実行例:</p>
                    <img src="/assets/images/005_001.png" alt="生成例" />

                    <h2 id="ルーティングの追加">ルーティングの追加</h2>
                    <p>URL <code>/chat</code> で表示されるようにルーティングを追加します（Angularの例）。</p>
                    <p>完成イメージ:</p>
                    <img src="/assets/images/005_002.png" alt="routing" />

                    <h2 id="HTML、CSS、TSを実装する">HTML、CSS、TSを実装する</h2>
                    <p>フォーム、スタイル、TypeScriptの実装例を順に追加します（Angularの例）。</p>
                    <img src="/assets/images/005_003.png" alt="result" />

                    <h2 id="サーバを起動">サーバを起動</h2>
                    <div className="highlight">
                      <pre><code>...Application bundle generation complete...
➜  Local:   http://localhost:4200/
                      </code></pre>
                    </div>
                    <p><code>http://localhost:4200/chat</code> にアクセスし、動作を確認します。</p>
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


