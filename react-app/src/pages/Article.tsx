import { useParams } from 'react-router-dom';

export default function Article() {
  const params = useParams();
  const articleId = params.id ?? 'unknown';
  return (
    <div>
      <h1>Article {articleId}</h1>
      <p>Placeholder content for article {articleId}.</p>
    </div>
  );
}


