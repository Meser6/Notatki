// deklarowanie zmiennych robimy poprzez dodanie : po nazwie i napisanie nazwy typu
let przykladZmiennnej: number = 15
//przykladZmiennnej = "15" // dzieku temu do danej zmiennej nie bedziemy mogli wrzucic innych typow
//Funkcje
function przykladFunkcji(val1 : number, val2: string){ // mozemy okreslac typy jakie maja byc wyslane do funckcji
    return `${val2} to ${val1 -5}`
}
//przykladFunkcji(2) // TS nie pozwoli nam wyslac mniej argumentow do fukcji niz tyle ile jest zaledklarowane



//Podstawowe typy w TS:

//any


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