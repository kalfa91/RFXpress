import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RFXpress';
  constructor() {
    const config = {
      apiKey: 'AIzaSyAr4a_A3WPkCkZTdWp7xQLbC-fcStGsuEo',
      authDomain: 'rfxpress-2748d.firebaseapp.com',
      databaseURL: 'https://rfxpress-2748d.firebaseio.com',
      projectId: 'rfxpress-2748d',
      storageBucket: 'rfxpress-2748d.appspot.com',
      messagingSenderId: '1085646838646',
      appId: '1:1085646838646:web:afcbf201f440b16f803857',
      measurementId: 'G-S2QFFCJ3Z8'
    };
    firebase.initializeApp(config);

  }

}
