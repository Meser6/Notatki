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
//a innym razem odwrotnie. Aby tegmu zapobiec trzeba uzyc Callback hell (zle), Promise (dobrze) lub async/await (bardzo dorze)

//Promise
{
  // funkcjonalnosc ta ma za zadanie obluge asynchronicznych zawolan i spelnienie instrukcji w przypadku ich sukcesu lub porazki
  // Promise to tak na prawde stworzony kontener na dane ktore dostaniemy z (zwykle asynchronicznej) funkcji
  // Gdy powstaje przyjmuje pusta wartosc i jest w trybie oczekiwania.
  // gdy zadanie sie wykona to wypelnia ona obietnice danymi.
  // w zaleznosci od tego czy zadanie sie udalo czy nie obietnica taka moze przuje stan sukcesu, lub porazki
  // mozemy obsluzyc takia obietnice na wypadek obu tych stanow
  // gdy obietnica juz sie wypelni to pozostanie ona niezmienna
  // (np bedzie porazka i blad bo nie ma intetnetu. gdy pojawi sie internet to obietnica nie zmieni sie na sukces)

  // w wieksosci przypadkow obietnice sa zwracane automatycznie przy wykonywaniu zadan
  const autoObietnica = fetch("http://url/pl"); // zwroci obietnice

  //budowanie obietnicy manualnie
  {
    const obietnica = new Promise(function (resolve, rejacted) {
      // przyjmuje dwa parametry. zostana zwrocone odpowiednio w wyniku spelnienionego lub nieudanego zadania
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
    //stary sposob - then/catch/finnaly
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

        //blad wywolany manualnie
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
    //nowy spobob - async/awiat
    {
      //async/awiait to tak na prawde obudowane metody z then
      //ich zaleta jest to, ze asynchroniczny kod wyglada jak synchroniczny. nie ma tez callback hell
      //async oznacza jakas funkcje jako asynchroniczna. ZAWSZE zwroci ona Promise
      //kod pod funkcja bedzie sie wykonywal rownolegle
      async function funkcjaAsynchroniczna() {
        const res = await fetch(url); // await dajemy przed instrukcja ktora zwroci obietnice. poczeka on na jej wykonanie i zwroci jej wynik
        //przejdzie do kolejnej linijki dopieto gdy sie wykona
        const response = await resp.json(); // mozemy dac kilka awaitow w funckji. wykonaja sie one jeden po drugim
      }
      async function funkcjaAsynchroniczna2() {
        //aby wypalac bledy musimy nasz kod obudowac w try/catch
        //zawsze powinnismy umieszczac swoje asynchroniczne wywolania w bloku try/catch
        try {
          const res = await fetch(url);
        } catch (err) {
          console.log(err);
        }
      }
      //zwracanie wartosci
      //funkcja asynchroniczna zawsze zwroci Promise
      const obietnica = async function funkcjaAsynchroniczna3() {
        try {
          const res = await fetch(url);
          return res.body; // zwroci to w przypadku sukcesu a wiec gdy nie wystapi zaden blad
        } catch (err) {
          console.log(err);
          throw err; // wprzypadku bledow musimy ponownie rzucic blad tak, zeby Promise ktore bedzie zwrocone mogo przyjac stan porazki
          //bez tego nawet jak w kodzie wystapi blad to catch w funkcji go obsluzy a zwrocone Promise przyjmie sukcess
        }
      };
      //aby zkonsumowac taka obietnice mozemy uzyc dwoch sposobow:
      //then
      obietnica
        .then((resp) => {
          // wylapac ja w then. jesli nie zwrocilibysmy bledu w catch tej funkcji to obietnica przyjmie sukkces i wywola sie to
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
      //samoistne wywolanie asynchronicznej funkcji ktora poczeka na Promise
      (async function () {
        try {
          await funkcjaAsynchroniczna3();
        } catch (err) {
          console.log(err);
        }
        console.log("finnaly");
      })();
    }
    //Combinator
    {
      //Promise.all
      //Wywola wszystkie przekazane instrukcje na raz i zwroci obietnice ktora zwroci tablice z ich wynikami (jesli wszsytkie beda sukccesami), lub pierwzy napotkany blad
      Promise.all([fetch(url1), fetch(url2), fetch(url3)]); // w parametrach przekazujemy tablice funkcji ktore maja sie wykonywac jednoczesnie
      //zwroci nam obietnice ktora bedzie zawierac tablice zwroconych wartosci funkcji ktore wywolywalismy
      //jesli chociaz jedna z obietnic tych funkcji przyjmie porazke to wowczas glowna obietna rozniwz zostanie zwrocona jako porazka

      //Promise.race
      //Wywola wszystkie przekazane instrukcje na raz i zwroci obietnice ktora zwroci wynik najszybszej, bez wzgedu na stan jaki przyjmie
      Promise.race([fetch(url1), fetch(url2), fetch(url3)]);

      //Promise.allSettled
      //Wywola wszystkie przekazane instrukcje na raz i zwroci obietnice ktora zwroci tablice z ich wynikami (bez wzgledu na stan jaki przyjmia)
      Promise.allSettled([fetch(url1), fetch(url2), fetch(url3)]);

      //Promise.any
      //Wywola wszystkie przekazane instrukcje na raz i zwroci obietnice ktora zwroci wynik najszybszej ktora przyjmie sukcess
      Promise.any([fetch(url1), fetch(url2), fetch(url3)]);
    }
  }
}
//callback hell
{
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

    // przyklad z Promise
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
