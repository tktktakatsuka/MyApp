import '../styles/article001.css';

export default function Article006() {
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
                      <p>アンドロイドアプリをJavaで始める方法(2025年1月作成)</p>
                    </h1>
                    <h4 id="目次">
                      <p><strong>目次</strong></p>
                    </h4>
                    <ul>
                      <li><a href="#動作環境">動作環境</a></li>
                      <li><a href="#この記事の目標">この記事の目標</a></li>
                      <li><a href="#事前準備">事前準備</a></li>
                      <li><a href="#プロジェクトを作成する">プロジェクトを作成する</a></li>
                      <li><a href="#動作確認をする">動作確認をする</a></li>
                      <li><a href="#作成したアプリ">作成したアプリ</a></li>
                    </ul>

                    <br />
                    <h2 id="Angularとは">Angularとは</h2>
                    <p>TypeScript, CSS, HTML で実装されたWebアプリケーションフレームワーク。簡単にフロントエンド（web画面）の Web サイトを開発できます。</p>

                    <h2 id="動作環境">動作環境</h2>
                    <ul>
                      <li>・Windows 10</li>
                      <li>・Android Studio Ladybug 2024 2.1 Patch3</li>
                      <li>・Java</li>
                      <li>・gradle</li>
                    </ul>

                    <h2 id="この記事の目標">この記事の目標</h2>
                    <p>アンドロイドスタジオを利用して開発を始めることができるように準備することです。</p>
                    <p>以下手順を実施することで開発を始めることができるようになります。</p>

                    <h2 id="事前準備">事前準備</h2>
                    <p>Android Stusio Ladybugをインストールできていることが前提です。手順は以下を参照してください。</p>
                    <ul>
                      <li><a href="https://codeforfun.jp/how-to-install-android-studio-windows-and-mac/">・Androidアプリのインストール手順</a></li>
                    </ul>

                    <h2 id="プロジェクトを作成する">プロジェクトを作成する</h2>
                    <p>File → New → New Project をクリック</p>
                    <img src="/assets/images/006_01.png" alt="step1" />
                    <p>Bottom Navigation Views Activity を選択</p>
                    <img src="/assets/images/006_02.png" alt="step2" />
                    <p>Language: Java / Build configuration language: Groovy DSL(build.gradle)</p>
                    <img src="/assets/images/006_03.png" alt="step3" />
                    <p>プロジェクト画面に遷移したらOK</p>
                    <img src="/assets/images/006_05.png" alt="step4" />

                    <h2 id="動作確認をする">動作確認をする</h2>
                    <p>Runボタンをクリックし、仮想端末にHome画面が表示されればOKです。</p>
                    <img src="/assets/images/006_08.png" alt="run" />
                    <img src="/assets/images/006_06.png" alt="emulator" />
                    <h2 id="作成したアプリ">作成したアプリ</h2>
                    <p>趣味で初めて公開した競馬アプリです（Java/Android Studio）。</p>
                    <a href="https://play.google.com/store/apps/details?id=com.tktkcompany.kakoRaceKeiba">競馬過去レース結果アプリ</a>
                    <img src="/assets/images/006_09.png" alt="app" />
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


