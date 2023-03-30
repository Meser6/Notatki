let przykladZmiennnej: number = 15// deklarowanie zmiennych robimy poprzez dodanie : po nazwie i napisanie nazwy typu
przykladZmiennnej = "15" // dzieku temu do danej zmiennej nie bedziemy mogli wrzucic innych typow

let dwaTypy : number | string; // mozemy dopisac wiecej niz jeden typ za pomoca | 

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

//string ----------------- 
const string1: string = "hej"
const string2: string = 'hej'
const string3: string = `${string1}`

//number -----------------
const numner1: number = 2
const numner2: number = 2.5
const numner3: number = NaN
const number4: number = 15616 * 15

//boolean -----------------
const boolean1: boolean = true
const boolean2: boolean = 2 >= 2
const boolean3: boolean  =  string1 === "hej"

//array -----------------
const array1:number[]= [2,3,4] // tzn tablica liczb
const array2:Array<string> = ['ss', 'd'] // alternatywny zapis
const array3:{name: string}[] = [{name: 'bob'}, {name: 'frank'}]

//object -----------------
const object1:{
    name: string; 
    age: number;
} = { 
    name: 'jeden', 
    age: 22
} // objekt z zadanymi parametrami. oddzielic ; a nie ,

//interfejs -----------------
interface wzorObiektu { // mozemy stoworzyc interfejs ktoty jest wzornikiem 
    //dla obiektow i nadac danemu obiektowi typ tego interfejsu 
    name: 'bob' | 'hans';
    age: number;
    women?: boolean // wlasciwosc z ? oznacza ze obiekt taka wlasciwosc moze miec, ale nie musi
} 
const object2: wzorObiektu = {
    name: 'bob', 
    age: 12
}

//funkcja -----------------
const zwrociSume = (v1: number, v2: number) => { return v1+v2 } // tworzymy funkcje z parametrami i typem zwracanum
//gdyby nic nie zwracala to bylaby (v1: number, v2: number) => void

interface funkcjaInterfejs {
    suma: (v1: number, v2: number) => number; // w ten sposob dopisjemy parametrowi suma typ funkcja (ta konktetna)
    int: number
}

const funkcja1: funkcjaInterfejs = {
    suma: zwrociSume, // dzieki temu mozemy dopisac tylko odpowiadajaca typowi funkcje 
    int: 3
}
funkcja1.suma(5,15)

//any -----------------
let any1; // jak sama nazwa wskazuje moze byc wszystkim. niezalecane uzywanie  
let any2: any = 15//zmienna any jest wszystikim i mozemy ja wrzucic wszedzie bez bledow
const funckcjaAny = (v1: string) => {return v1}
funckcjaAny(any2)

//unkown -----------------
let unkown1: unknown = zwroci10()//zalozmy ze zamiast funkcji jakis serwis wysyla cos co nie wiemy czym bedzie
//gdybysmy uzyli any to taka zmienna moglibysmy wrzucic do funkcji i nie byloby bledu
const unknown1Funkcja = (v1: number) => {console.log(v1)}
unknown1Funkcja(unkown1) // jako ze zmienna jest unknown to nie pozwoli nam wrzucic w miejsce gdzie oczekuje sie czegos

if(typeof zwroci10() === 'number'){ // w ten sposob mozemy sprawdzic co funkcja zwraca i wywolac odpowiednie metody
    unknown1Funkcja(zwroci10()) 
}

//never -----------------
// to mechanizm zabezpieczjacy, glownie dla ifow. gdy chcemy miec pelne pokrycie i nigdy nie wywolac bloku else
type mozliweLiczby = 1 | 2 
const liczby: mozliweLiczby[] = [1,2]
const dupa = (liczby:mozliweLiczby) =>{
    if(liczby === 1){
        console.log('zrob cos')
    } else if (liczby === 2){
        console.log('zrob cos')
    } else { // nigdy nie chcemy zeby ten blok sie wykonal. i tak jest bo poprzednie bloki pokrywaja wszystkie
        // kombinacje tablicy. ale jakby w mozliwychLiczbach i tablicy byla liczba 3 to juz blok else by sie wykonal
        // a TS zorientowalby sie ze do const bedzie cos dopisane i rzucilby bledem 
        const never: never = liczby
        console.log('nie rob nic')
    }
}

//Enum -----------------
// enum jest to typ wyliczalny
enum markiSaamochodow {
    BMW = "BMW",
    AUDI = 'Audi',
    DACIA = 15
}

const enumy = (marka:markiSaamochodow) => {console.log(marka)}
enumy(markiSaamochodow.AUDI) // wydrukuje wartosc dopisana do tego enuma

//Tuples -----------------
// jest to sposob organizacji danych ktory wymusza odpowiednie typy 
//w odpowiednich miejscach w tabeli
const tuples1: [string, number]= ['bob', true]

//Klasy -----------------
class Klasa{ // Klasy w TS sa takie jak w JS ale maja wiecej funkcji
    pierwszaLiczba: number; // mozemy tworzyc properties bez dopisania od razu wartosci
    private drugaLiczba: number = 15 // prywatny properties bedzie widoczny tylko w obrebie tej klasy
    // i nie bedzie mozna go pobrac nigdzie indziej. bedzie ona widoczna jak np. wylogujemy instancje klasy
    // ale nie bedzie sie jej dalo pobrac ani podmienic poza klasa
    trzeciaLiczba?: number// mozna robic opcjonalne propertisy

    constructor(v1: number, v2: number){
        this.pierwszaLiczba = v1
        this.drugaLiczba = v2
    }

    doSomething(pierwszaLiczba: number){
        console.log(pierwszaLiczba)
    }

    private doSomethingInClass(){ // prywatne moga byc tez funkcje  
        console.log('private')
    }
}

const instancjaKlasy = new Klasa(1, 3)
instancjaKlasy.doSomething(15)
// zawezanie typow -----------------
//mozemy oreslic jakie dokladnie wartosci moze posiadac dana zmienna/parametr
let siedemLubOsiem: 7 | 8;
siedemLubOsiem = 7
siedemLubOsiem = 8
siedemLubOsiem = 9 // 9 nie mozemy przypisac bo zawezilismy tylko do 7 i 8

type ograniczoneTypy = "jeden" | "dwa" | 1 | 2 // w ten sposob mozemy tworzyc typy a parametry/zmienne
//ktore przyjmia ten typ beda musialy miec dokladnie taka wartosc

const type1: ograniczoneTypy = 1

function zwroci10() { return 15-5 }
const type2: ograniczoneTypy = zwroci10() // TS nie wie czy funkcja zwroci dokladnie to co zadeklarowane
// przez to bedzie sie wyswiwtlal blad. mozemy to naprawic w ten sposob: 
const type3: ograniczoneTypy = zwroci10() as ograniczoneTypy // tutaj mowimy ze funckja na pewno zwroci
//to co chcemy. jak zwroci cos innego to TS tego nie wylapie. stosowac tylko jak sie ma PEWNOSC
