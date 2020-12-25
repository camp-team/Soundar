import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFirestore
  ) { }

  login() {
    const provider = new auth.GoogleAuthProvider();
    provider.setCustomParameters({prompt: 'select_acount'});
    this.afAuth.signInWithPopup(provider);
  }

  logout() {
    this.afAuth.signOut();
  }
}
