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

/**
 * @description initial data to send to firebase
 */

const userData = {
	user: {
		name: 'david muchiri',
		age: 21,
		isSingle: false,
		stressLevel: 6,
		job: {
			title: 'Software Developer',
			company: 'Google'
		},
		location: {
			city: 'Nairobi',
			country: 'Kenya'
		}
	}
};

/**
 * @description updates to send to firebase
 */

const updateData_01 = {
	name: 'David Njugi Muchiri',
	isSingle: null,
	'job/title': 'Network Enginner'
};
const updateData_02 = {
	stressLevel: 9,
	'job/company': 'amazon',
	'location/city': 'seattle'
};

/**
 * @description sending data to firebase using set
 */

database
	.ref()
	.set(userData)
	.then(() => console.log('succesfuly written to database'))
	.catch(error => console.log('This failed:', error));

/**
 * @description reading data from database on data change
 */

database
	.ref('user')
	.on('value', snapshot => console.log('onchange', snapshot.val()));

/**
 * @description removing data from firebase
 */

database
	.ref('user/isSingle')
	.remove()
	.then(() => console.log('isSingle removed from database'))
	.catch(err => console.log('isSingle was not removed:', err));

/**
 * @description changing data in firebase
 */

database
	.ref('user/age')
	.set(22)
	.then(() => console.log('age updated'))
	.catch(err => console.log('updates failed', err));

database
	.ref('user/location/city')
	.set('Mombasa')
	.then(() => console.log('city updated'))
	.catch(err => console.log('updates failed', err));

/**
 * @description reading data from firebase
 */

database
	.ref('user')
	.once('value')
	.then(snapshot => console.log(snapshot.val()))
	.catch(err => console.log('could not access data', err));

/**
 * @description updating data in firebase
 */

database
	.ref('user')
	.update(updateData_01)
	.then(() => console.log('data has been updated'))
	.catch(err => console.log('data not updated', err));

database
	.ref('user')
	.update(updateData_02)
	.then(() => console.log('data updated'))
	.catch(err => console.log('data not updated due to: ', err));

// ----------------------------------------------------------------------
/**
 * @description pushing data to the database
 */

const notes = [
	{ title: 'first', body: 'this is the first body' },
	{ title: 'second', body: 'this is the second body' },
	{ title: 'Third', body: 'this is the third body' },
	{ title: 'Fourth', body: 'this is the fourth body' }
];

notes.forEach(note => {
	database
		.ref('notes')
		.push(note)
		.then(() => console.log('data pushed'))
		.catch(err => console.log(err));
});

database
	.ref('notes')
	.once('value')
	.then(snapshot => {
		const expenses = [];
		snapshot.forEach(snapshotChild => {
			expenses.push({
				id: snapshotChild.key,
				...snapshotChild.val()
			});
		});
		console.log(expenses);
	})
	.catch(err => console.log(err));

database.ref('notes').on('value', snapshot => {
	const expenses = [];
	snapshot.forEach(snapshotChild => {
		expenses.push({
			id: snapshotChild.key,
			...snapshotChild.val()
		});
	});
	console.log(expenses);
});
database
	.ref('notes')
	.on('child_removed', snapshot =>
		console.log(snapshot.key, snapshot.val())
	);
database
	.ref('notes')
	.on('child_changed', snapshot =>
		console.log(snapshot.key, snapshot.val())
	);

database
	.ref('notes')
	.on('child_added', snapshot => console.log(snapshot.key, snapshot.val()));
