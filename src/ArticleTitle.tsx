import { decode } from 'html-entities';

interface ArticleTitleProps {
  order: number;
  isRanking?: boolean;
  noEllipsis?: boolean;
  title: string;
  showThumbnail?: boolean;
  imageUrl?: string;
  isStrikeThrough?: boolean;
}
export function ArticleTitle({
  order,
  isRanking,
  noEllipsis,
  title,
  showThumbnail,
  imageUrl,
  isStrikeThrough,
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
          isStrikeThrough ? ' is-strike-through' : ''
        }`}
      >
        {isRanking && `${order}. `}
        {decode(title)}
      </h3>
    </>
  );
}
