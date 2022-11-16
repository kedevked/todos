import { Component } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todos';

  user: { displayName: string | null } | null = null;
  auth = getAuth();
  provider = new GoogleAuthProvider();
  ngOnInit() {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      }
    });
  }
  signIn() {
    signInWithPopup(this.auth, this.provider).then((credential) => {
      console.log('you are logged in', credential);
      this.user = credential.user;
    });
  }
}
