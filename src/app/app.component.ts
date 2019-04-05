import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyBk6sEkE1U0NjnTU9KWYb0vlq8tHX-6c7Q",
        authDomain: "api-firebase-a16df.firebaseapp.com",
        databaseURL: "https://api-firebase-a16df.firebaseio.com",
        projectId: "api-firebase-a16df",
        storageBucket: "api-firebase-a16df.appspot.com",
        messagingSenderId: "437879838253"
      };
      firebase.initializeApp(config);
  }
}
