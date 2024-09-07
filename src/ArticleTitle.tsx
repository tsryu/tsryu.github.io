import { decode } from 'html-entities';

interface ArticleTitleProps {
  order: number;
  isRanking?: boolean;
  noEllipsis?: boolean;
  title: string;
  showThumbnail?: boolean;
  imageUrl?: string;
  strikeThrough?: boolean;
}
export function ArticleTitle({
  order,
  isRanking,
  noEllipsis,
  title,
  showThumbnail,
  imageUrl,
  strikeThrough,
}: ArticleTitleProps) {
  return (
    <>
      {showThumbnail && imageUrl && (
        <span className="article-thumbnail">
          <img src={imageUrl} alt="" />
        </span>
      )}
      <h3
        className={`article-title${noEllipsis ? ' no-ellipsis' : ''}${
          strikeThrough ? 'strike-through' : ''
        }`}
      >
        {isRanking && `${order}. `}
        {decode(title)}
      </h3>
    </>
  );
}
