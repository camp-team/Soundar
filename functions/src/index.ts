import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';


// Cloud Functionsでデータベースにアクセスできるようにする
admin.initializeApp();
const db = admin.firestore();

// createUserというCloud Functionsの関数
export const createUser = functions.auth.user().onCreate((user) => {
  return db.doc(`users/${user.uid}`).set({
    uid: user.uid,
    name: user.displayName,
    avatarURL: user.photoURL,
    email: user.email,
    createdAt: new Date()
  });
});


export const deleteUser = functions.auth.user().onDelete((user) => {
  return db.doc('users/${user.uid}').delete();
});
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
