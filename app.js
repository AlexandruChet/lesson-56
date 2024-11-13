// const moyaJitta = {
// 	name: 'Alexander',
// 	lastName: 'Chetrean',
// 	age: 13,
// 	slovo1: 'I',
// 	slovo2: 'm',
// 	slovo3: 'My',
// 	newName: 'name',
// 	loveFood: 'Pizza',
// 	loveColor: 'red',
// 	mubytnaRobota: 'Front End Developer',
// 	live: 'live',
// 	area: 'Kyiv',
// 	sawHello: function sawHello() {
// 		console.log(
// 			this.slovo3 +
// 				' ' +
// 				this.newName +
// 				' ' +
// 				this.name +
// 				' ' +
// 				this.slovo1 +
// 				"' " +
// 				this.slovo2 +
// 				' ' +
// 				this.age +
// 				'. ' +
// 				this.live +
// 				' in ' +
// 				this.area +
// 				'.'
// 		)
// 	},
// }

// moyaJitta.sawHello()

// const person = {
//     name: "Alex",
//     age: 25,
//     gender: "Men",
//     showInfo:function () {
//         console.log(`Привіт! Мене звати ${this.name}. Мені ${this.age} років, і я ${this.gender}.`);

//     }
// }

// const students = [
// 	{ name: 'Vlada', age: 12, gender: 'woman', grade: 9 },
// 	{ name: 'Maxim', age: 13, gender: 'man', grade: 6 },
// 	{ name: 'Dima', age: 13, gender: 'man', grade: 11 },
// 	{ name: 'Alexander', age: 14, gender: 'man', grade: 12 },
// ]

// function Grade() {
// 	let totalGrade = 0
// 	for (let i = 0; i < students.length; i++) {
// 		totalGrade += students[i].grade
// 	}
// 	return totalGrade / students.length
// }
// const result = Grade(students)
// console.log(`Середній бал: ${result}`)

const book = {
	title: 'Game Of Trones',
	author: 'Joerge Martin',
	year: 1996,
	genre: 'Fentesy,',
	newFunction: function (avtor,tutle,year,genre) {
		book.author = avtor
		book.title = tutle
		book.year = year
		book.genre = genre
}
}
book.newFunction('Ремарк Эрих Мария','На восточном фронте без перемен', 1920, 'Драма')

const car = {
	brand: 'BMW',
	model: '51516575476886868868',
	year: 2025,
	color: 'blue',
	CarFunction: function () {
		console.log(
			'Auto:' +
				this.brand +
				this.model +
				$this.year +
				'year' +
				'color:' +
				this.color
		)
	},
}

// const restaurant = { 
//     name: 'Le Restourant de Queste', 
//     cuisine: 'French', 
//     adress: 'backerstreet221b', 
//     rating: 999, 
//     newFunction: 
//     function (add,rait) { 
//   restaurant.adress = add 
//   restaurant.rating = rait
//     } 
// }
// restaurant.newFunction('backerstreet221b','0')