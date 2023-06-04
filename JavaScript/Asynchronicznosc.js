// zwykly kod js wykonuje sie synchronicznie tj linijka po linijce. jesli jedna jedna linijka trwa dlugo (bo np laduje duzy obrazek) to linijki
//ktore sa po niej czekaja na nia i wywolaja sie dopiero jak ona sie skonczy

//jesli taka linike co trwa dlugo ustawimy jako kod asynchroniczny to zacznie sie ona wykonywac, ale kolejne linijki nie beda czekaly az skonczy tylko
//tez zaczna sie wykonywac przez co bedzie wiele watkow w jednym czasie
//ma to ogromne zastosowanie w przypadku korzystania z API poniewaz nie musimy czekac na dane ktore przyjada tylko mozemy ladowac strone dalej a dane
//potem tylko ddodac do strony jak przyjda

//wiele funkcji w js ma wbudowana asynchronicznosc np:
document.body.src = "plik";

function asynchroniczna() {} // zalozmy ze funkcja ta jest asynchroniczna i zajmuje od 1 do 5 sekund

const jeden = asynchroniczna();
const dwa = asynchroniczna();
const trzy = asynchroniczna();
//js wykona wszystkie te trzy funkcjei zawarte w nich instrukcje nie czekajac az pierwsza sie skonczy
//jesli np. dodawaloby to element do strony to beda one w roznych kolejnosciach poniewaz raz np. zapytanie 3 moze sie szybiej skonczyc niz 1
//a innym razem odwrotnie. Aby tegmu zapobiec trzeba uzyc Callback hell (zle) albo Promise (dobrze)

//Promise
{
  // funkcjonalnosc ta ma za zadanie obluge asynchronicznych zawolan i spelnienie instrukcji w przypadku
  // Promise to tak na prawde stworzony kontener na dane ktore dostaniemy z (zwykle asynchronicznej) funkcji
  // Gdy powstaje przyjmuje pusta wartosc i jest w trybie oczekiwania.
  // gdy  zadanie sie wykona to wypelnia ona obietnice danymi.
  // w zaleznosci od tego czy zadanie sie udalo czy nie obietnica taka moze przuje stan sukcesu, lub porazki
  // mozemy obsluzyc takia obietnice na wypadek obu tych stanow
  // gdy obietnica juz sie wypelni to pozostanie ona niezmienna
  // (np bedzie porazka i blad bo nie ma intetnetu. gdy pojawi sie internet to obietnica nie zmieni sie na sukces)

  // w wieksosci przypadkow obietnice sa zwracane automatycznie przy wykonywaniu zadan
  const autoObietnica = fetch("http://url/pl"); // zwroci obietnice

  //budowanie obietnicy manualnie
  {
    const obietnica = new Promise(function (resolve, rejacted) {
      // przyjmuje dwa parametry. zostana zwrocone odpowiednio w wynujy spelnienia lub nieudanego zadania
      const liczba = Math.random(); // w body funkcji wykonujemy instrukcje ktore maja cos zrobnic i zdecydwoac o sukcesie/porazce
      if (liczba > 0.5) {
        resolve("sukces"); // sukces i porazke wywolujemy bezposrednio w kodzie.
        //obietnica zwroci to co w parametrze w zalenzosci od wyniku instrukcji
      } else {
        rejacted(new Error("porazka"));
      }
    });
  }

  obietnica
    .then((sukces) => {
      console.log(sukces);
    })
    .catch((porazka) => {
      console.error(porazka);
    });

  //obietnice mozemy tez zwracac jako wynik funkcji
  function poczekaj(name) {
    return new Promise(function (resolve, rejacted) {
      resolve("udalo sie");
      rejacted("nie udalo sie");
    });
  }

  //mozemy tez zbudowac obietnice ktore od razu przyjmia stan jaki chcemy
  Promise.resolve("sukces").then((succes) => console.log(succes));
  Promise.reject("porazka").catch((err) => {
    throw new Error(err);
  });

  //konsumpcja obietnicy i wykorzytsnie danych (na przykladzie fetch)
  {
    fetch("http://url/pl") // zwroci obietnce w ktorej ma wyladowac odpowiedz
      .then(function (succes) {
        //then wypelni sie tylo w przypadku sukcesu
        //poczeka az obietnica sie wypelni. przekaze do parametru funkcji dane ktore obietnica miala zwrocic w przypadku sukcesu
      })
      .catch(function (err) {
        //catch tylko w przypoadku gdy ktorakolwiek obietnica w lancuchu przyjmie porazke
      });

    fetch("http://url/pl")
      .then(function (succes) {
        return 23; // jesli cokolwiek zwrocimy to wartosc ta bedzie wartoscia obietnicy i bedzie mozna ja wykorzysac w kolejnm then
      })
      .then((toBedzieDwadziesciaTrzyANieSucces) => {});

    //osblugiwanie roznych stanow
    {
      //obietnice moga przyjac stan sukcesu lub porazki. porazke mozna osluzyc na dwa sposoby
      //stan porazki wywola sie gdy zostanie rzucony wyjatek
      fetch("url")
        .then(
          // przekazujac w thenie dwie funcje. wywolaja sie one w zaleznosci od stanu
          (succes) => {}, // pierwsza wywola sie w przypadku sukcesu
          (err) => {} // druga w przypadku porazki. jesli bedzie porazka do daljsze instrukcje w lancuchu nie wykonaja sie
          //raczej rzadko uzywane
        )
        .then((xd) => {}); //to juz sie nie wywola

      //catch
      //catch bedzie wylapywal wszystkie bledy jakie pojawia sie w dowolnym momencie lancucha i je obslugiwal
      fetch("url")
        .then((jedenSukces) => {}) //wywola sie
        .then((tuPojawiSieBlad) => {}) // nie wywola sie tylko przejdzie do catch
        .then((dwaSukces) => {}) // nie wywola sie
        .catch((err) => {}); // catch bedzie wylapywal wszystkie stany porazki jakie pojawia sie w dowolnym momencie lancucha i je obslugiwal

      //finally
      // finally zawsze sie wywola na koncu lancucha, bez wzgledu na to jakie stany przyjmia poptrzednie
      fetch("url")
        .then((jedenSukces) => {}) // wywola sie
        .then((dwaSukces) => {}) // wywola sie
        .catch((err) => {}) // nie wywola sie bo nie ma bledu
        .finally(() => {}); // wywola sie bo nie patrzy na stany

      //blad wywolany manyalnie
      fetch("url") // zwroci 500
        .then((resp) => {
          //wywola sie bo 500 to nie blad
          if (resp.status === 500) {
            throw new Error("Error message"); // to storzy nowy blad i zakonczy od razu funkcje. przekaze blad do catch
            //dotyczy to sytuacji tylko w tej funkcji. jesli chcemy to obsluzyc w innym thenie to musimy tam tez to dac
          }
        })
        .then((dwa) => {}) // nie wywola sie tylko przejdzie do catch
        .catch((err) => {}); // wywola sie
    }
  }
  //callback hell
  // jest to pojecie opisujace zagmatwana implementacje kodu asunchronicznego ktory ma sie wywolywac jeden po drugim

  //przyklad bez promise
  function ajax2(number) {
    const request = new XMLHttpRequest();
    request.open("GET", "url.pl/1");
    request.send();
    request.addEventListener("load", function (data) {
      const data = JSON.parse(this.body);

      //to wywola sie edopiero jak pierwsze sie zaladuje
      request.open("GET", "url.pl/2");
      request.send();
      request.addEventListener("load", function (data) {
        const data = JSON.parse(this.body);
      });
    });

    // przyklad z promise
    fetch("url.pl/1")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(`1: ${resp}`);
        return fetch("url.pl/2"); // aby tutaj wykonac funkcje po fukcji wystraczy zwrocic jej obiednice i dalej na niej jechac
      })
      .then((resp) => resp.json())
      .then(console.log(`2: ${resp}`));
  }
}
