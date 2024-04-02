export type BlogSidebarType = {
  recentPost: RecentPostType[];
  categories: CategoriesType[];
  tag: TagType[];
};

export type RecentPostType = {
  id: number | string;
  srcImg?: string;
  title: string;
  duration: string;
};

export type CategoriesType = {
  id: number;
  title: string;
  number: number;
};

export type TagType = {
  id: number;
  name: string;
};

export type BlogDetailType = {
  blogDetailHeader: BlogDetailHeaderType[];
  cardMediaAction: string;
  duration: string;
  blogDetailContent: BlogDetailContentType;
  blogComment: BlogCommentType[];
};

export type BlogDetailHeaderType = {
  id: number;
  icon: string;
  title: string;
};

export type BlogDetailContentType = {
  cardMedia: string;
  title: string;
  description: string;
  content: string;
  tag: TagType[];
  likeCount: number;
  post: PostType;
  meta: MetaType;
};

export type PostType = {
  user: string;
  userName: string;
  userPosition: string;
  description: string;
};

export type MetaType = {
  metatitle: string;
  metadesc: string;
  keywords: string;
};

export type BlogCommentType = {
  id: number;
  image: string;
  name: string;
  duration: string;
  comment: string;
};

export type BlogContentType = {
  id: number;
  blogDetailHeader: BlogDetailHeaderType[];
  cardMediaAction: string;
  duration: string;
  blogDetailContent: BlogDetailContentType;
  blogComment: BlogCommentType[];
};

export type BlogType = {
  blogSidebar: BlogSidebarType;
  blogContent: BlogContentType[];
};

export type FileType = Partial<File> & {
  preview?: string;
  path?: string;
  src?: string;
  id?: number;
};
