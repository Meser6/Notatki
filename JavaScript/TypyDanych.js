//W JS nie ma typowania zmiennych co oznacza ze do zmienniej x mozna wrzucic i pomienic ja na rozne typy

// zmienna deklarujemy przez słówko kluczowe var
//nie moze sie ona zaczynac od cyfr i miec znaków spęcjalnych (oprocz $ i _)

var zmienna; // stara szkola. juz nie powinno sie tego uzywac
let zmienna2; // uzywamy gdy dana zmienna beziemy chcieli zmieniac w trakcie wykonywania kodu. moze byc zadeklarowana pusta
const zmienna3 // uzywamy gdy dana zmienna nie bedziemy zmieniac (cos jak finale).
//NIE może być zadeklarowana pusta. jak sie sprobuje nadpisac to rzuci wyjatek

//tekst
zmienna = "Text";
zmienna = 'Text';
zmienna = "Tex\"t" // \" dezaktywuje cudzysłów
zmienna = "Text\n" // \n działa jak enter

// liczby
zmienna = 1;
zmienna = 1.5; //kropka zamiast przecinka

//operatory logiczne
zmienna = true;
zmienna = false;

//pusty
zmienna = null;

//nie określony
//np. jesli wywołujemy funkcje z dwoma argumentami ale wyslemy do niej tylko jeden to ten drugi przyjmie wartosc undefined
zmienna = undefined;