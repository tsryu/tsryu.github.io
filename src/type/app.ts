interface Article {
  title: string;
  link?: string;
  imageUrl?: string;
}

interface SectionType {
  name: string;
  url?: string;
  category: string;
  priority?: number;
  data: Article[];
  isRanking?: boolean
  noEllipsis?: boolean;
  apiOption?: any;
  showThumbnail?: boolean;
}


interface RSSNews {
  [category: string]: SectionType[]
}

export type {
  Article,
  SectionType,
  RSSNews
}