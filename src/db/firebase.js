import * as firebase from 'firebase';
import dbconfig from './config';
var config = {
	apiKey: dbconfig.key,
	authDomain: dbconfig.authDomain,
	databaseURL: dbconfig.databaseURL,
	projectId: dbconfig.projectId,
	storageBucket: dbconfig.storageBucket,
	messagingSenderId: dbconfig.messagingSenderId
};

firebase.initializeApp(config);
const database = firebase.database();
export { firebase, database as default };
