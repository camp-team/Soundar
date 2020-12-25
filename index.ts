import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';


// Cloud Functionsでデータベースにアクセスできるようにする
admin.initializeApp();
const db = admin.firestore();

// createUserというCloud Functionsの関数
export const createUser = functions.auth.user().onCreate((user) => {
  return db.doc('users/${user.uid}').set({
    name: user.displayName,
    avatarURL: user.photoURL,
    email: user.email,
    createdAt: new Date()
  });
})
