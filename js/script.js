// // Zad 4.

// Stwórz obiekt, który będzie reprezentował kota. Powinien on posiadać takie pola jak: name, level_hapiness, level_hunger, level_lonliness.
// Następnie dodaj metody, które będą zwiększały oraz zmniejszały wartości powyższych zmiennych. Nazwij je zgodnie z działaniem, np. “feed”, “sleep”, “play”.
// Następnie, stwórz metodę, która będzie wyświetlała informację o statusie kota (wydruk uzależnij od wartości atrybutów kota), np. “Pusia is not lonliness, a bit hungry and very happy”, “Pusia is a bit lonliness, very hungry and not happy” itp.

// Rozwiązanie oprzyj o dwa poznane sposoby na tworzenie klas.

// Podpowiedź: konstruktor, 4 metody (feed, sleep, play, status)

class Cat {
	constructor(name, level_happiness, level_hunger, level_lonliness) {
		this.name = name
		this.level_happiness = level_happiness
		this.level_hunger = level_hunger
		this.level_lonliness = level_lonliness
	}

	feed() {
		this.level_happiness++
		this.level_hunger--
	}

	sleep() {
		this.level_lonliness--
		this.level_happiness++
	}

	play() {
		this.level_lonliness--
		this.level_happiness++
		this.level_hunger++
	}

	status() {
		let msg = `${this.name} is`

		if (this.level_happiness < 0) {
			msg += ` is not happy,`
		} else {
			msg += ' very happy,'
		}

		if (this.level_lonliness < 0) {
			msg += ` a bit lonliless,`
		} else {
			msg += ' not lonliless,'
		}

		if (this.level_hunger < 0) {
			msg += ` a bit hungry.`
		} else {
			msg += ' not hungry.'
		}

		console.log(msg)
	}
}

let pusia = new Cat('Pusia', 3, 5, 2)

pusia.status()

// Stwórz klasę Order, która będzie reprezentowała zamówienie ze sklepu internetowego. Klasa ta ma zawierać takie pola jak: id (będący kolejnymi liczbami całkowitymi), price, name. Utwórz mapę, do której będziesz dynamicznie dodawał kolejne zamówienia (w sumie 5). Kluczami w takiej mapie mają być wartości odpowiadające id-kom z każdego z zamówień.

// Podpowiedź: Klasa Order i Mapa to osobne “byty”. Nie należy tworzyć mapy w klasie. Mapa przechowuje obiekty stworzone przez konstruktor klasy Order.

class Order {
	static idNumber = 0
	
	constructor(Name, price) {
		this.id = ++Order.idNumber
		this.price = price
		this.Name = Name
	}
}

// console.log(Order.idNumber);

let ItemsMap = new Map()

const item1 = new Order('Apple', 5)
ItemsMap.set(item1.id, item1)

const item2 = new Order('Pinapple', 7)
ItemsMap.set(item2.id, item2)

const item3 = new Order('Tomato', 15)
ItemsMap.set(item3.id, item3)

const item4 = new Order('Chili', 25)
ItemsMap.set(item4.id, item4)

const item5 = new Order('Cheese', 2)
ItemsMap.set(item5.id, item5)

console.log(ItemsMap)

// Zad 2.
// Stwórz klasę Teacher dziedziczącą po Person. W klasie Person mają znajdować się takie pola jak: name oraz surname. W Teacher zaimplementuj metodę teach, która otrzymuje stringa subject i wydrukuje:

// <Teacher's name and surname> is now teaching <subject>.

class Person {
	constructor(name, surname) {
		this.name = name
		this.surname = surname
	}
}

class Teacher extends Person {
	teach(subject) {
		console.log(`${this.name} ${this.surname} is now teaching ${subject}`)
	}
}

let newTeacher = new Teacher('Jan', 'Bąk')
let newSubject = newTeacher.teach('Math')

// Zad 3.
// Stwórz klasę Account, która będzie przechowywała pola: balance, number (numer konta) oraz metody: deposit(value), withdraw(value) oraz gettery i settery dla wymienionych pól. Implementację metod deposit oraz withdraw pozostawiam Tobie. Pamiętaj o dodaniu odpowiednich walidacji w takich metodach (np. wpłacana wartość nie może być ujemna).

// Następnie stwórz dwie klasy dziedziczące po Account: SavingAccount oraz CurrentAccout.

// Klasa SavingAccount powinna posiadać również pole: interest i metodę, która będzie odpowiednio zwiększała wartość przechowywanego atrybutu.

// CurrentAccount powinien natomiast składać się z atrybutu overdraft_limit z metodą zwiększającą jego wartość.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

class Account {
	constructor(number, balance) {
		this._number = number
		this._balance = balance
	}

	deposit(value) {
		if (value <= 0) {
			console.log('Podana wartość jest zbyt mała')
		}
		this._balance += value
	}

	widthdraw(value) {
		if (value > 10000) {
			console.log('Zbyt duża kwota, wymagana autoryzacja banku')
		}
		this._balance -= value
	}

	get balance() {
		return this._balance
	}

	set balance(value) {
		this._balance += value
	}

	get number() {
		return this._number
	}

	set number(value) {
		this._number = value
	}
}

class savingAccount extends Account {
	constructor(number, interest) {
		super(number)
		this.interest = interest
	}

	addInterest() {
		this._balance += this._balance * (this.interest * 100)
	}
}

class CurrentAccount extends Account {
	constructor(number, overdraftLimit) {
		super(number)
		this.overdraftLimit = overdraftLimit
	}

	increaseLimit(value) {
		if (value <= 0) {
			console.log('Wartość debetu jest zbyt mała')
		} else {
			this.overdraftLimit += value
		}
	}

	setLimit(overdraft_limit) {
		this.overdraftLimit = overdraft_limit
	}
}

// Następnie stwórz klasę Bank, która będzie zawierała tablicę wielu obiektów Account (konkretnie CurrentAccout oraz SavingAccount). W banku stwórz metodę update, która będzie iterowała po każdym koncie i dodawała do niego dowolną wielkość depozytu. Dodatkowo, w przypadku obiektu typu SavingAccount, ma być zwiększane pole interest każdego konta o 5, a dla CurrentAccount - overdraft_limit o 10.

class Bank {
	constructor() {
		this.accounts = []
	}

	createAccount(account) {
		this.accounts.push(account)
	}

	update() {
		this.accounts.forEach(account => {
			account.deposit(Math.random() * 1000)
		})
	}

	increaseInterest(interest) {
		this.interest += interest * (interest * 0.05)
	}
}

// Zad 5.
// Stwórz klasę Airplane z polem name oraz flagą isFlying (typ bool), która domyślnie jest ustawiana na false.
// Utwórz dwa obiekty Airplane.
// Korzystając z prototypu, dodaj do obiektów metodę takeOff, która będzie ustawiała flagę isFlying na true oraz land - setującą isFlying na false. Sprawdź, czy metody dodane dzięki prototypowi są prawidłowo wywoływane i realizują swoje założenia.

function Airplane(name) {
	this.name = name
	this.isFlying = false
}

Airplane.prototype.takeOff = function () {
	this.isFlying = true
	console.log(`${this.name} has taken off`)
}

Airplane.prototype.land = function () {
	this.isFlying = false
	console.log(`${this.name} is going to land`)
}

const firstAirplane = new Airplane('TU-124')
const secondAirplane = new Airplane('Boeing-301')

firstAirplane.takeOff()
secondAirplane.land()

console.log(firstAirplane.isFlying)
console.log(secondAirplane.isFlying)

// Zad 6. (zewnętrzne źródło)
//     - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
//     - All instances built with Car:
//         + should initialize with an `tank` at 0
//         + should initialize with an `odometer` at 0
//     - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
//     - Give cars ability to `.drive(distance)`. The distance driven:
//         + Should cause the `odometer` to go up.
//         + Should cause the the `tank` to go down taking `milesPerGallon` into account.
//     - A car which runs out of `fuel` while driving can't drive any more distance:
//         + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.

class Car {
	constructor(model, milesPerGallon) {
		this.model = model
		this.milesPerGallon = milesPerGallon
		this.tank = 0
		this.odometer = 0
	}

	fill(gallons) {
		this.tank += gallons
	}

	drive(distance) {
		const maxDistance = this.tank * this.milesPerGallon
		if (distance > maxDistance) {
			this.tank = 0
			this.odometer += maxDistance
			console.log(`I ran out of fuel at x miles! ${this.odometer} odometer`)
		} else {
			this.tank -= distance / this.milesPerGallon
			this.odometer += distance
		}
	}
}

const Car1 = new Car('Opel', 20)
Car1.fill(15)
console.log(Car1.drive(300))
console.log(Car1)

// Zad 2.
// Stwórz klasę WaterVassel, która będzie zawierała takie pola jak: id, volume (objętość naczynia), water_volume (objętość jaką zajmuje woda w obiekcie takie klasy).
// Następnie utwórz listę 5 obiektów WaterVassel o losowej pojemności z przedziału 50 - 200 i water_volume równym 0.

// Zdefiniuj zmienną water_canister = 1000, która będzie odzwierciedlała całkowitą do rozlania ilość wody między naczyniami. Proces rozlewania wody ma następować po kolei dla każdego z naczyń, dopóki nie zostaną one w pełni napełnione lub dopóki water_canister wyniesie 0.

// class WaterVassel {
// 	let = (water_conister = 1000)

// 	constructor(id, volume, water_volume) {
// 		this.id = id
// 		this.volume = volume
// 		this.water_volume = water_volume
// 	}
// }

// let = randomVessels = []

// for (let i = 1; i <= 5; i++) {
// 	let volume = Math.floor(Math.random() * (200 - 50 + 1) + 50)
// 	randomVessels.push(i, volume, 0)
// }

// let actualVassel = 0

// for (WaterLevel = 0; water_conister > 0 && WaterLevel < randomVessels; actualVassel++) {
// 	let Vessel = randomVessels[actualVassel]
// }

// console.log(Vessel)

// console.log(volume)

// Zad 3
// Operacje na frontendzie to nie tylko dbanie o odpowiedni wygląd strony, ale też często walidacja danych przed przekazaniem ich na backend.

// Stwórz klasę User, która będzie zawierała takie atrybuty jak (pamiętaj o enkapsulacji):
// name
// surname
// email
// gender
// password
// date_joined (datę twórz z wbudowanej biblioteki Date)

// Podczas ustawiania wartości tych pól, ma za każdym razem następować walidacja, czy zmienne te są poprawne. To, jakie warunki ma walidować system, zależy od kreatywności programisty. Przykładem może być sprawdzenia, czy hasło zawiera co najmniej 8 znaków (w tym co najmniej jedną wielką literę, jedną cyfrę i jeden znak specjalny). Do walidacji możesz wykorzystać ReGexa.

class User {
	#name
	#surname
	#email
	#gender
	#password
	#date_joined

	constructor(name, surname, email, gender, password) {
		this.name = name
		this.surname = surname
		this.email = email
		this.gender = gender
		this.password = password
		this.date_joined = new Date()
	}

	get name() {
		return this.#name
	}

	get surname() {
		return this.#surname
	}

	get email() {
		return this.#email
	}

	get gender() {
		return this.#gender
	}

	get password() {
		return this.#password
	}

	get date_joined() {
		return this.#date_joined
	}

	set name(value) {
		if (!value) {
			console.log('The field cannot be empty')
		}
		this.#name = value
	}

	set surname(value) {
		if (!value) {
			console.log('The field cannot be empty')
		}
		this.#surname = value
	}

	set email(value) {
		const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/
		if (!value || !regex.test(value)) {
			console.log('This is wrong format of email address')
		}
		this.#email = value
	}

	set gender(value) {
		if (!value) {
			console.log('The field cannot be empty')
		}
		this.#gender = value
	}

	set password(value) {
		if (value < 8) {
			console.log('This password is to short')
		}

		if (!/\d/.test(value)) {
			console.log('The password does not contain a number')
		}
		this.#password = value
	}

	set date_joined(value) {
		this.#date_joined = value
	}
}

const getUser = new User('Jan', 'Kowalski', 'kowalski@o2.pl', 'male', 'xx112x5z')
console.log(getUser)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Zad 1.
// Stwórz klasę, która będzie pełniła rolę wrappera (storage-a) konfiguracji połączeniowej z API. Klasa ta ma się nazywać MyRequest oraz przechowywać takie atrybuty jak:
// URL address
// Method (np. “GET”)
// API Token
// Obiekt tej klasy ma posiadać gettery oraz settery do odpowiednich pól. Zadbaj o poprawną enkapsulację.

// Następnie stwórz klasę Sender, która będzie zawierała takie metody statyczne jak:
// sendReq(request, destination), gdzie request to odpowiednio skonfigurowany obiekt wyżej utworzonej klasy; destination to obiekt niżej utworzonej klasy, do której będziemy kierowali request

// Następnie stwórz klasę ApiService, która będzie symulowała działanie API serwisu. Klasa ta ma zawierać:

// statyczne listy:

// countries = [“Poland”, “Japan”, “Madagascar”, “Mali”, “Nepal”]
// continents = [“European”, “Asia”, “Australia”, “Africa”, “Asia”]

// statyczne pola:
// key (pole to będzie weryfikowane z polem API Token z request)

// metody: getCountries, getContinents z parametrem request
// Metody te będą odbierały wysyłany przez Sender obiekt typu Request, wyciągały z niego API Token, porównywały z polem statycznym - key. Jeżeli wartości te będą identyczne, to sprawdzamy również, czy methodType również pobrany z request, ma wartość równą GET. Jeżeli wszystkie te warunki zostaną spełnione, to wówczas metody mają zwracać odpowiednie listy (countries/continents). W przeciwnym razie zwracana lista ma być pusta.

class MyRequest {
	constructor(url, method, apiToken) {
		this.url = url
		this.method = method
		this.apiToken = apiToken
	}

	get url() {
		return this.url;
	}

	set url(url) {
		this.url = url;
	}

	get method() {
		return this.method;
	}

	set method(method) {
		this.method = method;
	}

	get apiToken() {
		return this.apiToken;
	}

	set apiToken(apiToken) {
		this.apiToken = apiToken;
	}
}

class apiService {
	static countries = ['Poland', 'Japan', 'Madagascar', 'Mali', 'Nepal']
	static continents = ['European', 'Asia', 'Australia', 'Africa', 'Asia']
	static key = 'xyz'

	getCountries(request) {
		//sprawdzamy czy requesr.apiToken == apiService.key jeśli tak to znaczy że requeste jest zautoryzowany (i zwracamy listę krajóm) jeśli nie to rzecamy wyjątkiem albo pokazujemy błąd
		if (request.apiToken === apiService.key && request.method === 'GET') {
			return apiService.countries
		}else{
			return []
		}
	}
	getContinentals(request) {
		if (request.apiToken === apiService.key && request.method === 'GET') {
			return apiService.continents
		}
		else{
			return []
		}
	}
}

class Sender {
	static sendReq(request, destination) {
		//ponieważ destination jest instancją apService  to możemy wywoływać jego metody
		//destination.getContinentals

		destination.getContinentals

	}
	// implementacja sendReq
}

const request = new MyRequest('http://localhost/countries', 'GET', 'xyz')
const service = new apiService()
const response = Sender.sendReq(request, service)
console.log(response) // [POland...]

// dodatkowy eksperyment - zrobić request z takim tokenem który nie jest taki sam jak key w klasie apiService i wówczas response nie powinien zawierać danych

// // Zad 4
// Wyobraź sobie, że poniższa lista reprezentuje nierelacyjną bazę danych użytkowników (jest to specjalny sposób przechowywania danych, strukturalnie może być bardzo podobny do formatu JSON).

// 	Stwórz klasę User, która będzie zawierała takie pola i metody jak:

// #id, username, email, #password, #createdAt, #isLoggedIn

class User2 {
	#id
	#password
	#createdAt
	#isLoggedIn

	constructor(id, username, email, password, createdAt, isLoggedIn) {
		this.#id = id
		this.username = username
		this.email = email
		this.#password = password
		this.#createdAt = createdAt
	}

	// singIn - umożliwiać ona będzie logowanie się użytkownika na podstawie informacji zawartych w bazie (wyżej utworzonej liście users)
	signIn(username, password) {
		for (let i = 0; i < users.length; i++) {
			if (users[i].username === username && users[i].#password === password) {
				users[i].isLoggedIn = true
				return 'Użytkownik poprawnie zalogowany'
			}
		}
		return 'Bląd logowanai'
	}

	// countLikes - metoda ta będzie przeszukiwać listę products i wyświetlać nazwy produktów, które polubił dany użytkownik (zauważ, że informacje o polubieniach przechowujemy wewnątrz pola likes z rekordu każdego produktu)
	countLikes() {
		for (let i = 0; i < products.length; i++) {
			if (products[i].likes.includes(this.#id)) {
				console.log(products[i].name)
			}	
		}
	}

	// rateProduct - która przyjmować będzie id produktu wraz z oceną, którą użytkownik chce przypisać
	rateProduct(productId, rating) {
		for (let i = 0; i < products.length; i++) {
			if (products[i]._id === productId) {
				products[i].ratings.push({ userId: this.#id, rate: rating})
				break
			}else{
				return 'Błędne id produktu'
			}
		}
	}
}

//
const users = [
	new User2('ab12ex', 'Alex', 'alex@alex.com', '123123'),
	new User2('fg12cy', 'Asab', 'asab@asab.com', '123456'),
	new User2('zwf8md', 'Brook', 'brook@brook.com', '13111'),
	new User2('eefamr', 'Martha', 'martha@martha.com', '123222'),
	new User2('ghderc', 'Thomas', 'thomas@thomas.com', '123333'),
]

console.log(users[0].signIn('Alex', '123123'))

//
//
const products = [
	{
		_id: 'eedfcf',
		name: 'mobile phone',
		description: 'Huawei Honor',
		price: 200,
		ratings: [
			{ userId: 'fg12cy', rate: 5 },
			{ userId: 'zwf8md', rate: 4.5 },
		],
		likes: [],
	},
	{
		_id: 'aegfal',
		name: 'Laptop',
		description: 'MacPro: System Darwin',
		price: 2500,
		ratings: [],
		likes: ['fg12cy'],
	},
	{
		_id: 'hedfcg',
		name: 'TV',
		description: 'Smart TV:Procaster',
		price: 400,
		ratings: [{ userId: 'fg12cy', rate: 5 }],
		likes: ['fg12cy'],
	},
]

users[1].countLikes()
console.log(users[1].rateProduct('eedfcf', 3));

