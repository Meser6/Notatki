//tablice służą do przechowywania w nich danych
//w JS mozna przechowywac rozne typy w jednej tablicy

var tab =  new Array(); //nie trzeba deklarowac wielkosci tablicy jak w javie (wówczas powstanie tablica 0 elementowa)
var tab2 = new Array(3); //ale mozemy tez od razu zadeklarowac jej wielkosć (a potem zmienic ofc)
var tab3 = new Array("jeden", "dwa", "trzy"); // można stworzyć tablice od razu z zadeklarowanymi zmiennymi w niej
var tab4 = [true, false] // inny ze sposobów tworzenia tablicy z zadeklarowanymi zmiennymi

tab.push("poniedzialek"); // dodawainie do tablicy (na koncu)
tab.unshift("pierwszy") // dodawanie do tablicy (na poczatku). jesli [0] jest zajey to przesunie wszystkie wartosci
tab[1] = "wtorek"; // dodawanie do tablicy mozemy tez obsluzyc poprzez przypisanie do indeksu danej wartosci
tab[3] = "czwartek"; //jeżeli dodamy wartosci nie pokolei to te które są nie wypełnione i same sie zapełnią pustą wartością

tab.splice(1, 1) // usunie wpis o danym indexie, drugi paramtr okresla ile wpisow 'w prawo 'od podanego indexu (wlacznie) ma usunac
tab.pop(); //usunie ostatni wpis w tablicy
tab.shift() // usunie pierwszy wpis w tablicy

const index =  tab.indexOf("poniedziałek") // zwróci indeks który odpowiada argumentowi. jesli nie znajdzie zwroci -1

tab.length; //wielkość tablicy (tu bedzie 4 bo [2] jest pusty)

tab.reverse(); // odwraca wpisy w tabeli (4 bedzie 0 a 0 -4 itp.)

tab.sort(); // posortuje elementy od A do Z lub od najmniejszej do najwiekszej (jesli sa inty w niej)
tab.sort().reverse(); // odwrocone sortownie (Z -> A, 10 -> 1 itp)

var tab5 = tab3.concat(tab4)// łączy tablice 3 i 4 i wpisuje ja w nową

const string = tab.join(" ") // łączy wpisy z tabeli (w kolejsoci)  w stringa a miedzy nie wstawia to co w argumencie

tab.map(x => console.log(x.length));//literowanie po elementach. to co po => mozna wrzucić w {} i zrobic wiecej niz linijke
tab.forEach(x => console.log(x)); //literowanie po elementach.  to co po => mozna wrzucić w {} i zrobic wiecej niz linijke