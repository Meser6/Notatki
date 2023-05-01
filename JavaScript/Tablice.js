//tablice służą do przechowywania w nich danych
//w JS mozna przechowywac rozne typy w jednej tablicy

//zadzadzanie
{
  //tworzenie - mozemy uzyc const i zmieniac elementy tablicy. nie mozemy jednak podmienic w tedy calej tablicy
  const tabela = [true, false, 15, "tekst"]; // inny ze sposobów tworzenia tablicy z zadeklarowanymi zmiennymi
  const tab = new Array(); //nie trzeba deklarowac wielkosci tablicy jak w javie (wówczas powstanie tablica 0 elementowa)
  const tab2 = new Array(3); //ale mozemy tez od razu zadeklarowac jej wielkosć (a potem zmienic ofc)
  const tab3 = new Array("jeden", "dwa", "trzy"); // można stworzyć tablice od razu z zadeklarowanymi zmiennymi w niej

  //pobieranie wartosci
  tabela[0]; // podajemy index elementu
  tabela.at(0); //to samo co w []
  tabela.at(-1); // z ta roznica ze mozna przekazywac ujemne indexy. bedzie liczyc od konca

  //dodawanie wartosci
  tab.push("poniedzialek"); // dodawainie do tablicy (na koncu). zwroci tez dlugosc tablicy
  tab.unshift("pierwszy"); // dodawanie do tablicy (na poczatku). jesli [0] jest zajey to przesunie wszystkie wartosci zwroci tez dlugosc tablicy
  tab[1] = "wtorek"; // dodawanie do tablicy mozemy tez obsluzyc poprzez przypisanie do indeksu danej wartosci
  tab[3] = "czwartek"; //jeżeli dodamy wartosci nie pokolei to te które są nie wypełnione i same sie zapełnią pustą wartością
  tab[1] = "nowyWtorek"; // jak wrzucimy coc w index ktory juz jest wypelniony to wartosc ta podmnieni stara
  tab[4] = 15 - 12; // przypisze 3 poniewaz oczeuje sie tu wartosc. to samo bedzie z funkcja co cos zwraca
  tab[5] = tab2; // mozemy tez wrzucic np. tabele albo zmienna

  //usuwanie wartosci
  tab.splice(1, 1); // usunie wpis o danym indexie, drugi paramtr okresla ile wpisow 'w prawo 'od podanego indexu (wlacznie) ma usunac
  tab.pop(); //usunie ostatni wpis w tablicy zwroci tez usuniety element
  tab.shift(); // usunie pierwszy wpis w tablicy  zwroci tez usuniety element
}
//Metody i właściwości tabel
{
  tab.indexOf("poniedziałek"); // zwróci indeks który odpowiada argumentowi. jesli nie znajdzie zwroci -1
  tab.includes("nieponiedzialek"); // zwroci booleana w zaleznosci czy znajdzie element czy nie/ sprawdzi scisla korelacje ===

  tab.length; //wielkość tablicy (tu bedzie 4 bo [2] jest pusty)

  tab.reverse(); // odwraca wpisy w tabeli (4 bedzie 0 a 0 -4 itp.)

  tab.sort(); // posortuje elementy od A do Z lub od najmniejszej do najwiekszej (jesli sa inty w niej)
  tab.sort().reverse(); // odwrocone sortownie (Z -> A, 10 -> 1 itp)

  const tab5 = tab3.concat(tab4); // łączy tablice 3 i 4 i wpisuje ja w nową

  const string = tab.join(" "); // łączy wpisy z tabeli (w kolejsoci)  w stringa a miedzy nie wstawia to co w argumencie

  tab.slice(2); // utnie tablice przed X elementem (ten element tez bedzie w nowej) i zwroci nowa/ nie zmieni nic w wywolywanej
  tab.slice(2, 5); // utnie i storzy nowa tablice. element poczatkowy doda, koncowy NIE
  tab.slice(-2); // to samo ale zacznie liczyc od konca
  tab.slice(); // w ten sposob mozemy tez stworzyc kopie tablicy (to samo przez spreeed operator)

  tab.concat(["a", "b"]); // dolaczy tablice z paremtreu do tej n\wywolywanej

  tab.map((x) => console.log(x.length)); //literowanie po elementach. obecny element wrzuci w parametr funkcji
  tab.forEach((x) => console.log(x)); //literowanie po elementach. element wrzuci do parametrow funkcji
  tab.forEach((x, index, arr) => {
    x; // zwroci element z tablicy
    index; // jego index
    arr; //zwroci cala tablice
  }); // funkcji forEach nie mozna przerwac breakiem.

  for (const item of tab.entries()) {
    console.log(item); // dla kazdego elementu sttoworzy nowa tabele w kroej bedzie idex w podstawowej tabeli i wartosc
  }
  for (const [i, e] of tab.entries()) {
  } //zrobi to samo ale nie zwroci tablicy (destrukturyzacja) a dopisze index(i) i wartosc (e)

  //typeof teblicy to "object" aby sprawdzic czy tablica rzeczywiscie jest tablica uzywamy
  Array.isArray([1, 2, 3]);

  //tablice moga byc tez wielowymiarowe aczkolwiek zadko sie je stosuje
  const tab = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  tab[2][0]; // pobierze 7

  tab.every((el) => el > 5); // zwroci true jesli wszystkie elementy spelnia warunek
  tab.some((el) => el < 5); // zwroci true jesli chociaz jeden element spelni warunek
  tab.filter((el) => el === "bob"); // zwroci nowa tablice tylko tych elementow ktore spelni ten warunek
  tab.find((el) => el === "bob"); // zwroci pierwszy pasujacy element
}
