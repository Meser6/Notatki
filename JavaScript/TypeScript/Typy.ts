let przykladZmiennnej: number = 15// deklarowanie zmiennych robimy poprzez dodanie : po nazwie i napisanie nazwy typu
przykladZmiennnej = "15" // dzieku temu do danej zmiennej nie bedziemy mogli wrzucic innych typow

let toBedzieNumer = 15 // typescript domysli sie ze to jest numer i automatycznie przypisze do niego numer
toBedzieNumer = "216" // i nie pozwoli dopisac czegos innego pomimo braku widocznej deklaracji
let tuJestTypAny // powyzszy mechanizm zadziala TYLKO gdy dopiszemy wartosc do zmiennej na starcie. 
tuJestTypAny = 5
tuJestTypAny = "po"
let tuJestTypString : string // w takim przypadku trzeba dopisac typ juz momencie deklaracji zmiennej
tuJestTypString = "po"
tuJestTypString = 15 

//Funkcje
function przykladFunkcji(val1 : number, val2: string){ // mozemy okreslac typy jakie maja byc wyslane do funckcji
    return `${val2} to ${val1 -5}`
}
przykladFunkcji(2) // TS nie pozwoli nam wyslac mniej argumentow do fukcji niz tyle ile jest zaledklarowane

function przykladFunkcji2(val1, val2){ // w parametrach funkcji automatycznie przypisanie typow nie zadziala
    return `${val2} to ${val1 -5}`
}
przykladFunkcji(2, "dad") // bez okreslenia typow mozemy wpisac wszystko
przykladFunkcji2("2", "2")


//----------------- Podstawowe typy w TS: ----------------- 

//any
let u;

// string 
const string1: string = "hej"
const string2: string = 'hej'
const string3: string = `${string1}`

//number
const numner1: number = 2
const numner2: number = 2.5
const numner3: number = NaN
const number4: number = 15616 * 15

//boolean
const boolean1: boolean = true
const boolean2: boolean = 2 >= 2
const boolean3: boolean  =  string1 === "hej"

// array
const array1 = [2,3,4]

// object 
const object1 = { name: 'jeden', age: 22}