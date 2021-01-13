export interface Memo {
  memoId: string;
  thumbnailUrl: string;
  title: string;
  tags: string[];
  text: string;
  isPublic: boolean;
  likeCount: number;
  createdAt: Date;
  updatedAt: Date;
  uid: string;
}
