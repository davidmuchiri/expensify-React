import * as firebase from 'firebase';
var config = {
	apiKey: 'AIzaSyD8IxMazZ9HThbtTMMCqDUzG4zdUSo9y1U',
	authDomain: 'expensify-307be.firebaseapp.com',
	databaseURL: 'https://expensify-307be.firebaseio.com',
	projectId: 'expensify-307be',
	storageBucket: 'expensify-307be.appspot.com',
	messagingSenderId: '333513489322'
};

firebase.initializeApp(config);
const database = firebase.database();
export { firebase, database as default };
