const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This is my resolved data');
	}, 3000);
});
promise
	.then(data => console.log(data), err => console.log(err))
	.catch(err => console.log(err));
