const anything = () => {
	const animals = [
		{
			text: "new vedio",
			time: 1022833,
			sentiment: 0.12
		},
		{
			text: "new book",
			time: 1022833,
			sentiment: 0.45
		},
		{
			text: "old text",
			time: 102342833,
			sentiment: 0.56
		}
	];
	displayAnything(animals);
};
const displayAnything = animals => {
	animals.forEach(animal => {
		console.log(animal.text);
	});
};

anything();
