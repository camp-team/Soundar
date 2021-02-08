import * as firebase from 'firebase/app';


export interface Memo {
  memoId: string;
  thumbnailUrl: string;
  title: string;
  tags: string[];
  text: string;
  isPublic: boolean;
  likeCount: number;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
  uid: string;
}
