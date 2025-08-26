import { Link, useSearchParams } from 'react-router-dom';
import '../styles/dashboard.css';

export default function Dashboard() {
  const items = [
    { to: '/article001', img: '/assets/images/angular.png', title: 'Angularの環境構築からサーバー起動確認までの手順', date: '2024年2月作成', full: '/article001-full' },
    { to: '/article002', img: '/assets/images/dashboarg_002.png', title: 'AngularMaterialの導入から動作確認までの手順', date: '2024年2月作成' },
    { to: '/article003', img: '/assets/images/angular.png', title: 'Angularでコンポーネントの追加をする手順', date: '2024年2月作成' },
    { to: '/article004', img: '/assets/images/dashboarg_002.png', title: 'AngularMaterialでスピナーを実装する手順', date: '2024年2月作成' },
    { to: '/article005', img: '/assets/images/angular.png', title: 'AngularMaterialで作成したフォームを送信し、ngModelで双方向バインディング', date: '2024年2月作成' },
    { to: '/article006', img: '/assets/images/ladybug.jpg', title: 'アンドロイドアプリをJavaで始める方法', date: '2025年1月作成', subtitle: 'Android Studioを利用' },
  ];

  const PAGE_SIZE = 6;
  const [searchParams] = useSearchParams();
  const page = Math.max(1, Number(searchParams.get('page') || 1));
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const pageItems = items.slice(start, start + PAGE_SIZE);

  return (
    <div className="menu">
      <br />
      <strong className="title">
        <h1>とある都内SEの技術ブログ(中心)</h1>
      </strong>
      <br />

      <div className="">
        <div className="article">
          <div className="row">
            <div className="col-xs-12 col-md-8 ">
              <div className="card h-0 mb-3 mr-3">
                <div className="card-body">
                  <div className="row record">
                    {pageItems.map((it) => (
                      <div className="col-sm-6" key={it.to}>
                        <div className="example-card" id="example-card" style={{ marginLeft: 20 }}>
                          <div className="img-frame">
                            <Link to={it.to}><img src={it.img} alt={it.title} /></Link>
                          </div>
                          <div className="itemName">
                            <Link to={it.full ?? it.to} style={{ color: 'inherit' }}>
                              <p>{it.title}</p>
                              {it.subtitle ? <p>{it.subtitle}</p> : null}
                            </Link>
                          </div>
                          <p>{it.date}</p>
                        </div>
                        <br />
                      </div>
                    ))}
                  </div>

                  <nav style={{ display: 'flex', gap: 8, padding: 12 }}>
                    <Link to={`/?page=${Math.max(1, page - 1)}`}>Prev</Link>
                    {Array.from({ length: totalPages }).map((_, i) => {
                      const p = i + 1;
                      return (
                        <Link key={p} to={`/?page=${p}`} style={{ fontWeight: p === page ? 'bold' : undefined }}>
                          {p}
                        </Link>
                      );
                    })}
                    <Link to={`/?page=${Math.min(totalPages, page + 1)}`}>Next</Link>
                  </nav>

                </div>
              </div>
            </div>

            <div className="col-xs-12 col-md-4 ">
              <div className="container mb-5">
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


