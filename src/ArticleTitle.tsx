import { decode } from 'html-entities';

interface ArticleTitleProps {
  order: number;
  isRanking?: boolean;
  noEllipsis?: boolean;
  title: string;
  showThumbnail?: boolean;
  imageUrl?: string;
}
export function ArticleTitle({
  order,
  isRanking,
  noEllipsis,
  title,
  showThumbnail,
  imageUrl,
}: ArticleTitleProps) {
  return (
    <>
      {showThumbnail && imageUrl && (
        <span className="article-thumbnail">
          <img src={imageUrl} alt="" />
        </span>
      )}
      <h3 className={`article-title${noEllipsis ? ' no-ellipsis' : ''}`}>
        {isRanking && `${order}. `}
        {decode(title)}
      </h3>
    </>
  );
}
