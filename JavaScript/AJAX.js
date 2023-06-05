/* Schemat przeplywu danych klient-server:

1. Wysylamy request na adres http://wp.pl/test/1
2. Przegladarka wysyla najpierw adres do DNS (cos ala ksiazki adresowej internetu) aby uzyskac prawdziwy adres
3. DNS zwraca prawdziwy adres http://104.24.321.524:421
4. Zostaje utorzone poleczenie TCP/IP pomiedzy klientem (przegladarka) a serverem
5. Przegladarka generuje request w formacie HTTP z odpowiednia metoda, headerami i body
5.5. Dzieli takie na malutkie paczki i wysyla je do kilenta
6. Server odbiera takie pytanie i generuje odpowiedz z kodem, headerami i ewentualnie body
7. Znowu dzieli taka odpowedz na malutkie paczki i wysyla je do kilenta
8. Klient odbiera te paczki i TCP laczy je w odpowiedz

9. Jeśli w body jest np. element DOM w ktorym sa zaleznosci do jakichs CSSow lub JSow to klient znowu wysyla pytania o nie itd.
*/

//AJAX
//to technologia umozliwiajaca asynchrniczne wysylanie i odbieranie danych przez API bez koniecznosci przeladowywanai strony
//oryginalnie dane byly w formacje XML jednak teraz wysyla sie je w wiekszosci w  JSONie

// wywylanie zapytan
{
  //tworzenie requestu starym sposobem, bez korzystania z Promise
  {
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
  }
  // tworzenie zapytan nowym sposobem, z Promise
  {
    fetch("http://url/pl") // zwroci obietnce w ktorej ma wyladowac odpowiedz
      .then(function (resp) {
        // zwroci odpowiedz z headerami itp ale to jescze nie jest docelowa
        return resp.json(); // //aby dostac odpowiedz docelowa nalezy wyolac na niej funkcje json(). zworci tez obienice
      })
      .then(function (response) {
        // dopiero gdy ta obietnica sie wypelni to przekaze do parametru odpowiedz docelowa
        console.log(response);
      })
      .catch((err) => {
        //404 500 ani inne status code api to nie sa porazki.
        console.error(err);
      });

    //jesli chcielibysmy obluzyc sytacje z np. 500 lub innym zachowaniem niepozadanym to musimy swtorzyc wlasny wyjatek
    fetch("url").then((resp) => {
      if (resp.status === 500) {
        throw new Error("Error message");
      }
    });
  }
  // tworzenie zapytan najnowszym sposobem, z async/aweit
  {
    async function funkcjaAsynchroniczna() {
      try {
        const resp = await fetch(url);
        if (resp.status === 500) {
          throw new Error("Error message");
        }
        const response = await resp.json();
      } catch (err) {
        console.log(err);
      }
    }
  }
}
