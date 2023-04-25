//MAPY
{
  //mapy to zbiory danych charakteryzujace sie para klucz - wartosc
  //od obiektow rozni je to ze kluczem moze byc absolutnie wszystko
  const map = new Map([
    // aby storzyc mape z zawartoscia przekazyjemy do niej tablice tablic ktore maja
    //klucz i wartosc. w ten sposob powstanie mapa ktora jako klucz wezmie index 0, a wartosc index 1
    ["klucz", "wartosc"],
    [document.querySelector("h1"), "naglowek"], //kluczem moze byc wszystko
    [[1, 2], 12], //pamietac o referencji. w ten sposob nie bedziemy mogli tego pobrac bo przekazujac
    //tablice [1, 2] jej referencja bedzie inna. trzebaby da tablice do zmiennej i dac zmienna jako klucz
    [true, { a: 1 }],
  ]);

  //wlasciwosci
  map.set("klucz", "wartosc"); // dodwanie. zwroci aktualizowana mape przez co mozna chainowac kolejne rzeczy
  //klucze nie moga byc takie same. jak bedziemy chceli dodac do mapy pare ktora ma klucz ktory juz jest w
  //tablicy to sie on nie doda

  map.get("klucz"); //pobieranie wartosci po kluczu
  map.delete("klucz"); //usuwanie
  map.clear(); // czyszczenie
  map.has("klucz"); // sprawdzi czy taki klucz istenieje

  const obj = { a: 1 };
  // objekt -> mapa
  const objToMap = new Map(Object.entries(obj));
  //mapa -> tablica
  const mapToArr = [...objToMap];
}
//SETY
{
  //sety sa to zbiory danych ktore charakteryzuje to ze nie wystepuja w nich dwie takie same dane.
  //sety beda zawierac tylko unikatowe dane i jak do niego dwie takie same to i tak bedzie jedna
  const arr = [1, 2, 3, 4, 1, 5];

  const set = new Set(arr); // tworzenie seta. jako parametr przyjmnie TYLKO literowana wartosc, np tablice
  const setString = new Set("napis"); // lub stringa. tego rozbije na unikatowe litery

  //wlasciwosci
  set.size; // zwroci rozmiar
  set.has(1); // zwroci booleana w zaleznosci od tego czy ma dana wartosc
  set.add(6); // dodawanie do setu. jesli ta wartosc bedzie wystepowala to nie doda
  set.delete(1); // usuwanie
  set.clear(); // czyszczenie setu

  set.add("6"); // set patrzy na scisla korelacje a wiec moze wystepowac 6 i '6"

  const set11 = [...new Set(arr)]; // konwertowanie Setu na tablice
}
