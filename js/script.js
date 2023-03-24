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

// class MyRequest {

// constructor(URL, Metod, API){

// }

// }

// Zad 2.
// Stwórz klasę WaterVassel, która będzie zawierała takie pola jak: id, volume (objętość naczynia), water_volume (objętość jaką zajmuje woda w obiekcie takie klasy).
// Następnie utwórz listę 5 obiektów WaterVassel o losowej pojemności z przedziału 50 - 200 i water_volume równym 0.

// Zdefiniuj zmienną water_canister = 1000, która będzie odzwierciedlała całkowitą do rozlania ilość wody między naczyniami. Proces rozlewania wody ma następować po kolei dla każdego z naczyń, dopóki nie zostaną one w pełni napełnione lub dopóki water_canister wyniesie 0.

class WaterVassel {
	let = (water_conister = 1000)

	constructor(id, volume, water_volume) {
		this.id = id
		this.volume = volume
		this.water_volume = water_volume
	}
}

let = randomVessels = []

for (let i = 1; i <= 5; i++) {
	let volume = Math.floor(Math.random() * (200 - 50 + 1) + 50)
	randomVessels.push(i, volume, 0)
}

let actualVassel = 0

for (WaterLevel = 0; water_conister > 0 && WaterLevel < randomVessels; actualVassel++) {
	let Vessel = randomVessels[actualVassel]
	let freeSpace = water_conister
}

console.log(Vessel)

console.log(volume)
