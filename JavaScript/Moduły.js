//jesli w jakims pliku izujemy importu/exportu to staje sie on modulem.
//moduly sluza do komunikowania sie plikow js miedzy soba i wymiany danych
//dzieki nim mmozemy przekazac jakas zmienna/funckje etc. do inego pliku i korzystac z niej jakby tam byla zadeklarowana
//jesli uzywamy modulu w danym pliku to odpala sie on w strict mode
//wszystkie dane w modulach sa prytawne i nie dostepe poza nimi, chyba ze je wyeksportujemi i zaimportujemy

//jesli chcemy uzyc pliku z modułami w html trzeba go pobrac z odpowiednia flaga
// <script type='module' src:...>

//plikPierwszy.js - import
{
  //mozna go uzywac tylko na najzyszym poziomie modulu tj. nie mozna uzyc w zadnej funkcji etc. bedzie wykonywany jako pierwzy z calego kodu
  //nawet jak bedzie na samym dole pliku
  //tworzy on referencje do eksportu a nie rzeczywista zmienna w miejsciu importu
  //importowane rzeczy trzeba podawac w {}
  import { zmienna1 } from "./plikDrugi.js"; // ./ oznacza obecny wezel
  import { zmiennaZFolderuWyzej } from "../../folderWyzej.js"; // ../ przejdzie do folderu wyzej
  console.log(zmienna1);

  //mozemy tez importowac wiele rzeczy na raz
  import { zmienna2, zmienna3 } from "./plikDrugi.js";
  console.log(zmienna2);
  console.log(zmienna3);

  //jesli chcielibysmy zmienna nazwac inaczej niz jest w oryginalnym pliku uzywamy as
  import { zmienna1 as nowaNazwaZmiennej1 } from "./plikDrugi.js";
  console.log(nowaNazwaZmiennej1);

  //import defaultowych wartosci
  import defaultowaFunkcja from "./plikDrugi.js"; // imporujac defaultowa wartosc nadajemy jej nazwe w momemncie importu
  defaultowaFunkcja();

  //importowanie calego pliku
  import * as DaneZPliku from "./plikDrugi.js"; // zaimportuje obiekt z wszystkmi rzeczmy z pliku. obiekt taki nazywamy z duzej litery
  DaneZPliku.jakasFunkcja();

  //mozna tez zaimportowac  wykonanie calego plik. Trzeba wowczas pamietac, ze funkcje ktore sie tam wywolaja wywolaja sie tez w pliku importera
  import "./plikDrugi.js";
}
//plikDrugi.js - export
{
  //export dziala analogicznie do importu.
  export const zmienna1 = "zmienna1";

  //wiele eksportow na raz
  const zmienna2 = "zmienna2";
  const zmienna3 = "zmienna3";
  export { zmienna2, zmienna3 };

  // zmiana nazwy
  export { zmienna2 as nowaNazwaZmiennej2 };

  //default export
  //mozna go uzyc tylko raz na dany moduł. wyekrportuje on dany fragment kodu bez zadnej nazwy
  export default function () {}

  //w modulach mozemy uzywac await poza funkcjami asynchronicznymi. poczeka na odpowiedz obietnicy i zwroci jej wartosc
  //dziala to w sposob synchroniczny wiec reszta kodu wywola sie dopiero po wypelnieniu obietnicy
  //WAZNE: jesli cokolwiek bedziemy importowac z modulu ktory ma await to wowczas ten importer najpierw poczeka na wypelnienie
  //oietnicy z exportera, potem stworzy mostki a dopiero po tym zacznie wykonywac wlasny kod. zle to wplywa na perfo. stotowac ostroznie
  const data = await fetch(url);
}
