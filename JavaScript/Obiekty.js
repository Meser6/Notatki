//Obiekty można stworzyć na dwa sposoby:

//1 bez konstruktora (przydatne jak chcemy szybko stworzyć jeden obiekt i nie tworzyć  podobnych)
var adam= {imie: "Adam", wiek: 12};

//2 z konstruktorem
function Czlowiek(imie, wiek){ //konstruktor nazywamy z duzej litery
    this.imie = imie; // tutaj przypisujemy wysylany argument do zmiennej w konstruktorze
    this.wiek = wiek; // słówko this nie jako tworzy nowa zmienna do ktorej nastepnie przypisujemy argument
}

var beata = new Czlowiek("Beata", 12);
var krystian =  new Czlowiek("Krystian"); // gdy nie wypełnimy wszytkich argumentów to obiekt i tak powstanie
//a puste argumenty przyjmia pustą wartość

//aby dostac sie do parametrow danego obiektu nalezy go wywolac i dodac kropke
beata.imie;
beata["imie"]; //analogiczny sposob

//tworzenie metod w obiektach - implementujemu je w ciele obiektu/konstruktrze
//w przypadku 1 sposobu
var kuba = {imie: "Kuba", wiek: 15,
    przedstawSie(){ // krótsza forma
        return "mam na imie " + this.imie;
    },
    podajWiek: function(){ //dłuzsza forma
        return "mam " + wiek + " lat"
    }
}

kuba.przedstawSie();

//w przypadku 1 sposobu
function Pies (imie, rasa){
    this.imie = imie;
    this.rasa = rasa;
    this.przedstawSie = function(){
            return "mam na imie " + imie + " i jestem " + rasa;
    },
    this.zaszczekaj = function(szczek){ // oczywiscie mozna tworzyc metody z argumentami i nic nie zwracajace
        console.log(imie + " szczeka " + szczek);
    }
}

var azor = new Pies("azor", "mieszaniec")
azor.zaszczekaj("how how");

