// zwykly kod js wykonuje sie synchronicznie tj linijka po linijce. jesli jedna jedna linijka trwa dlugo (bo np laduje duzy obrazek) to linijki
//ktore sa po niej czekaja na nia i wywolaja sie dopiero jak ona sie skonczy

//jesli taka linike co trwa dlugo ustawimy jako kod asynchroniczny to zacznie sie ona wykonywac, ale kolejne linijki nie beda czekaly az skonczy tylko
//tez zaczna sie wykonywac przez co bedzie wiele watkow w jednym czasie
//ma to ogromne zastosowanie w przypadku korzystania z API poniewaz nie musimy czekac na dane ktore przyjada tylko mozemy ladowac strone dalej a dane
//potem tylko ddodac do strony jak przyjda

//wiele funkcji w js ma wbudowana asynchronicznosc np:
document.body.src = "plik";

//AJAX
//to technologia umozliwiajaca asynchrniczne wysylanie i odbieranie danych przez API bez koniecznosci przeladowywanai strony
//oryginalnie dane byly w formacje XML jednak teraz wysyla sie je w wiekszosci w  JSONie

//stary sposob
{
  //jest to stary sposob na asynchroniczna komnikacje z api, teraz raczej nie uzywany

  //tworzenie requestu
  function ajax(number) {
    const request = new XMLHttpRequest();
    request.open("GET", `url.pl/${number}`);
    //wysylanie
    request.send();
    //czekanie az przydzie i przechwytywanie odpowiedzi
    request.addEventListener("load", function (data) {
      const data = JSON.parse(this.body);
    });
  }

  //js wykona wszystkie te trzy funkcjei zawarte w nich instrukcje, nie czekajac az pierwsza sie skonczy
  ajax(1);
  ajax(2);
  ajax(3);
  //jesli np. dodawaloby to element do strony to beda one w roznych kolejnosciach poniewaz raz np. zapytanie 3 moze sie szybiej skonczyc niz 1
  //a innym razem odwrotnie. Aby tegmu zapobiec trzeba uzyc Callback hell czyi zagniezdzic cos co ma sie wykonac  po czyms
  //w funkcji listenera.
  //to samo sie robi gdy funcka w drugim zapytaniu zaleza od danych z pierwszego
  function ajax2(number) {
    const request = new XMLHttpRequest();
    request.open("GET", "url.pl/1");
    //wysylanie
    request.send();
    //czekanie az przydzie i przechwytywanie odpowiedzi
    request.addEventListener("load", function (data) {
      const data = JSON.parse(this.body);

      //callback hell -  to wywola si edopiero jak pierwsze sie zaladuje
      request.open("GET", "url.pl/2");
      request.send();
      request.addEventListener("load", function (data) {
        const data = JSON.parse(this.body);
      });
    });
  }
}

//nowy sposob
{
  //Promise
  {
    // funkcjonalnosc ta ma zapobiec powstawaniu callback hell
    // Promise to tak na prawde stworzony kontener na dane ktore dostaniemy z asynchronicznej funkcji
    // Gdy powstaje przyjmuje pusta wartosc i jest w trybie oczekiwania.
    // gdy asynchroniczne zadanie sie wykona to wypelnia ona obietnice danymi.
    // w zaleznosci od tego czy zadanie sie udalo czy nie obietnica taka moze przuje stan sukcesu, lub porazki
    // mozemy obsluzyc takia obietnice na wypadek obu tych stanow
    // gdy obietnica juz sie wypelni to pozostanie ona niezmienna
    // (np bedzie porazka i blad bo nie ma intetnetu. gdy pojawi sie internet to obietnica nie zmieni sie na sukces)
    //
    // w wieksosci przypadkow obietnice sa zwracane automatycznie przy wykonywaniu zadan
    const obietnica = fetch("http://url/pl"); // zwroci obietnice

    //konsumpcja obietnicy i wykorzytsnie danych
    {
      fetch("http://url/pl") // zwroci obietnce w ktorej ma wyladowac odpowiedz
        .then(function (resp) {
          //poczeka az obietnica sie wypelni
          // a nastepnie napierw zwroci odpowiedz z headerami itp ale to jescze nie jest docelowa
          return resp.json(); // //aby dostac odpowiedz docelowa nalezy wyolac na niej funkcje json(). zworci tez obienice
        })
        .then(function (response) {
          // dopiero gdy ta obietnica sie wypelni to przekaze do parametru odpowiedz docelowa
          console.log(response);

          return 23; // jesli cokolwiek zwrocimy to wartosc ta bedzie wartoscia obietnicy i bedzie mozna ja wykorzysac w kolejnm then
        })
        .then((toBedzieDwadziesciaTrzyANieRespone) => {});

      //callback hell
      {
        fetch("url.pl/1")
          .then((resp) => resp.json())
          .then((resp) => {
            console.log(`1: ${resp}`);
            return fetch("url.pl/2"); // aby tutaj wykonac funkcje po fukcji wystraczy zwrocic jej obiednice i dalej na niej jechac
          })
          .then((resp) => resp.json())
          .then(console.log(`2: ${resp}`));
      }
      //osblugiwanie roznych stanow
      {
        //404 500 ani inne status code api to nie sa porazki. bledem jest np odwolanie sie do paremteru ktory nie istnieje
        //obietnice moga przyjac stan sukcesu lub porazki. porazke mozna osluzyc na dwa sposoby
        fetch("url")
          .then(
            // przekazujac w thenie dwie funcje. wywolaja sie one w zaleznosci od stanu
            (succes) => {}, // pierwsza wywola sie w przypadku sukcesu
            (err) => {} // druga w przypadku porazki. jesli bedzie porazka do daljsze instrukcje w lancuchu nie wykonaja sie
          )
          .then((xd) => {}); //to juz sie nie wywola

        //catch
        // catch bedzie wylapywal wszystkie bledy jakie pojawia sie w dowolnym momencie lancucha i je obslugiwal
        fetch("url")
          .then((jedenSukces) => {}) //wywola sie
          .then((tuPojawiSieBlad) => {}) // nie wywola sie tylko przejdzie do catch
          .then((dwaSukces) => {}) // nie wywola sie
          .catch((err) => {}); // catch bedzie wylapywal wszystkie bledy jakie pojawia sie w dowolnym momencie lancucha i je obslugiwal

        //finally
        // finally zawsze sie wywola na koncu lancucha, bez wzgledu na to jakie stany przyjmia poptrzednie
        fetch("url")
          .then((jedenSukces) => {}) // wywola sie
          .then((dwaSukces) => {}) // wywola sie
          .catch((err) => {}) // nie wywola sie bo nie ma bledu
          .finally(() => {}); // wywola sie bo nie patrzy na stany

        //budowanie bledu manualnie
        //jesli chcielibysmy obluzyc sytacje z np. 500 lub innym zachowaniem niepozadanym to musimy swtorzyc wlasny wyjatek
        fetch("url")
          .then((resp) => {
            if (resp.status === 500) {
              // jesli warunek sie spelni
              throw new Error("Error message"); // to storzy nowy blad i zakonczy od razu funkcje. przekaze blad do catch
              //dotyczy to sytuacji tylko w tej funkcji. jesli chcemy to obsluzyc w innym thenie to musimy tam tez to dac
            }
            console.log(resp);
          })
          .then((dwa) => {}) // nie wywola sie tylko przejdzie do catch
          .catch((err) => {}); // wywola sie
      }
    }
    //budowanie obietnicy manualnie
    {
    }
  }
}
