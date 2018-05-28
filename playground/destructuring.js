//Object destructuring

const person = {
	name: 'Andrew',
	age: 26,
	location: {
		city: philadelphia,
		temp: 92
	}
};

const { name = 'david', age } = person;
console.log(`${name} is ${age}`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
	console.log(`it's ${temperature} in ${city}`);
}

//Array distructuring
const address = [
	'1299 s Junipert Street',
	'philadelphia',
	'Pennsylvenia',
	'19145'
];

const [street, city, state, zip] = address;

console.log(`You are in ${street} ${address[city]}`);
