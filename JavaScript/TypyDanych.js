//W JS nie ma typowania zmiennych co oznacza ze do zmienniej x mozna wrzucic i pomienic ja na rozne typy.
//Zmiennie przymuja jednak typu w zaleznosci od zawartosci.
//Typy dziela sie na to co jest obiektem, i to co nie jest (prymitywne). tych drugich jest 7

// zmienna deklarujemy przez słówko kluczowe var, a od  ES6 - let i const
//nie moze sie ona zaczynac od cyfr i miec znaków spęcjalnych (oprocz $ i _)
//musza byc WYZEJ niz funkcje w ktorych sa wywowylawane bo js czyta od gory do dolu

var zmiennaVar; // stara szkola. juz nie powinno sie tego uzywac
zmennaBezTypu; // w taki sposob tez stowrzymy zmienna i bedzie dzialac jednak bedzi globalna i nie robi sie tak

let zmiennaLet; // uzywamy gdy dana zmienna beziemy chcieli zmieniac w trakcie wykonywania kodu. moze byc zadeklarowana pusta
const zmiennaConst = 'cos' // uzywamy gdy dana zmienna nie bedziemy zmieniac
//NIE może być zadeklarowana pusta. jak sie sprobuje nadpisac to rzuci wyjatek
//const powinno sie uzywac tak czesto jak to mozliwe. dopieto jak musimy cos zmienic to let.

// ----------- prymitywne zmienne

//tekst
let zmienna1 = "Text";
zmienna1 = 'Text';
zmienna1 = "Tex\"t" // \" dezaktywuje cudzysłów
zmienna1 = "Text\n" // \n działa jak enter

// liczby
// liczby sa zawsze zmiennoprzecinkowe nawet jesli nie ma nic po przecinku. 
let zmienna2 = 1;
zmienna2 = 1.5; //kropka zamiast przecinka

//operatory logiczne
let zmienna3 = true;
zmienna = false;

//niezadeklaowany - undefind
//bez zadnej zadeklarowenej wartosci. sam kontener zmiennej
//np. jesli wywołujemy funkcje z dwoma argumentami ale wyslemy do niej tylko jeden to ten drugi przyjmie wartosc undefined
let zmienna4

//pusty
let zmienna5 = null;

//symbol
//defnuje wartosc ktora jest uni kalna i nie mozna jej zmienic
let zmienna6 //TODO przypisac cos

//duzy int
//number, ale moze byc wiekszy niz zwykly
let zmienna7 = 9007199254740991n

//aby poznac typ danej zminnej uzywamy operatora typeof
console.log(typeof zmienna3) // zwroci stringa z nazwa typu zmiennej
console.log(typeof "tekst")
console.log(typeof null) // zwroci object a nie null