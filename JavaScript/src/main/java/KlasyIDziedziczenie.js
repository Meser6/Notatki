// Klasy
//tworzymy poprzez słowko kuczowe class. Nazywamy je z dużej litery
class KlasaPierwsza{
    showName() { // metody piszemy bez słówka function
        console.log("Klasa pierwsza")
    }
    //let xd = "xd" nie mozemy w nich tworzyc zmiennych
    get int1(){ // mozemy za to tworzyc gettery ktore mniej wiecej odpowiadaja zmiennym
        return 5
    }
    get int2(){
        return 10
    }

    add(){ // jeśli odnieść sie do jakiejś wartości lub funkcji w klasie to uzywamy this
        return this.int1+this.int2
    }
    showResult(){
        console.log("Wynik = " + this.add())
    }
}

const klasa1 = new KlasaPierwsza() // tworzenie instancji klasy
klasa1.showResult();

// Konstruktor
// podobnie jak w Javie klasy posiadaja konstruktor domyslny ktory mozna nadpisac (ale bez przeciazenia)
// konstruktor wywołuje sie przy okazji inicjalizacji klasy
class KlasaDruga{
    constructor(int1, int2){
    this.int1 = int1;
    this.int2 = int2;
    }
    add(){
        return this.int1+this.int2
    }
}

const klasa2 = new KlasaDruga(1,3)
console.log(klasa2.add())

// Dziedziczenie
// klasa rodzic daje swoje metody klasie dziecku itd.
class KlasaTrzecia{
    add(){
        return 2 + 5
    }
}

class KlasaTrzeciaRozszerzenie extends KlasaTrzecia{ // klasa rodzic musi byc nad klasa dzieckiem w kodzie
    showResult(){
        console.log(this.add())
    }
}

const klasa3 = new KlasaTrzeciaRozszerzenie()
klasa3.showResult()
