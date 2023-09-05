//EVENTY
{
  //event listner sluzy do nasluchiwania jakichs akcji na danym elemencie i wykonywania instrukcji jesli one wystapia
  element.addEventListener("click", () => console.log("cos zrobi"));
  // przyjmuje          typ eventu,  funkcje ktora wykona sie gdy ten event nastapi

  //Kazde zdarzenie (klikniecie, najechanie na element etc) na stronie wywoluje pojawienie sie eventu z odpowiednimi oznaczeniami
  //Oznaczenie takie tworzy sie na samej gorze drzewa DOM (document) i w fazie capturing przechodzi od rodzica na dziecko do elementu
  //na ktorym rzeczywiscie zostalo wykonanie
  //Nastepnie w fazie bubbling wraca ona od dziecka do rodzica, dziadka etc az do drzewa dom.
  //Event listener bedzie nasluchiwal wszystkich takich eventow i wylapie je (domyslnie tylko w fazie bubbling)

  //<div id='1'>
  //  <button id='2'>
  //    <a id='3'> text </a>
  //  </button>
  //<div>

  //zalozny ze mamy taki dom, i podpiete pod kazdy z elementow nasluchiwanie na clicka
  // jesli klikniemy na 3 to wowczas wylolaja sie funkcje z nasluchiwan w kolejnosci 3 > 2 > 1
  // jesli kliniemy na 2 to wywola sie tylko 2 > 1

  // jesli chcemy przerwac ten lancuch, tj np wywolac tylko funkcje z 3 wowczas nalezy zastosowac
  element.addEventListener("click", (e) => {
    e.stopPropagation(); // nie jest to jednak zalecane
  });

  //jesli jednak z jakiegos powodu chcielibysmy, zeby brane pod uwage bylo pojawienie sie eventu w fazie capturing to nalezy dodac flage true
  element.addEventListener("click", () => {}, true);
  //wowczas (zakladajac ze element to 1) odpala sie eventy w kolejnosci 1 > 3 > 2

  function funkcja() {
    console.log("cos robi");
  }
  element.addEventListener("moseout", funkcja); // jesli chcemy wywolac jakas funkcje to robimy to bez ()
  //bo inaczej wywola sie instant
  element.addEventListener("click", function () {
    // aby przekazac jako callback funckje z argumentami i nie wywolywac ja instant
    funkcjaZArtumentami(2, 3); // trzeba opakowac ja w funkcje anonimowa
  });

  element.removeEventListener("click", nazwaFunkcji); // usuniecie eventu. nie mozna usunac go gdy powstal z funkcja anonimowa

  element.addEventListener("mousedown", (e) => {
    // w ten sposonb mozemy dostac sie do informacji o evencie
    if (e.keyCode === 13) {
      // informacje w zaleznosci od enevtu beda rozne, tu np wcisniety przycisk
      //e.key	Nazwa klawisza z uwzględnieniem wielkości liter
      //e.code Kod klawisza bez uwzględnienia wielkości liter
      funkcja();
    }
  });
  e.target; //pokaze element na ktorym rzeczywiscie zostal wykonany dany event

  element.addEventListener("click", function () {
    this; // wskaze na element na ktorym wywplujemy event listener
  });

  element.addEventListener("click", (e) => {
    e.preventDefault(); // czesto eventy odwiezaja strone po zakonczeniu.aby temu zapobiez uzywamy tej metody
  });

  //dodawanie eventow do podobnych elementow

  /*
  1   <ul element="list">
  2       <li element="li1">jeden</li>
  3       <li element="li2">dwa</li>
  4       <li element="li3">trzy</li>
  5   </ul>
  */

  //zalozmy ze mamy taki DOM i chcemy podpiac pod kazdy li event
  ul.querySelectorAll("li").forEach((el) => {
    el.addEventListener("click", () => console.log("click"));
  }); // noralnie zrobilibysmy to tak ale to zle wplywa na perfo poniewaz tworzy sie tyle funkcji co elementow

  //lepsza droga jest dodanie do rodzica, i sprawdzanie rzeczywistego miejsca wystapienia
  ul.addEventListener("click", (e) => {
    //wazne jest zeby sprawdic czy target rzewczywiscie wskacuje na element ktory chcemy, a nastapilo klikniecie na pusty obszar obok tego elementu
    if (e.target.element.consains("li")) console.log("click");
  });

  //this
  class klasa {
    thisFunkcja() {
      console.log("this powinno wskazac na funkcje", this); // w funkcji this wskazuje na klase
    }

    eventy() {
      element.addEventListener("click", thisFunkcja); // ale event listenerze bedzie wskazwac na element
      element.addEventListener("click", thisFunkcja.bind(this)); //w ten spso mozemy ustawic this na odpowiednie miejsce
    }
  }
  //typy eventow:
  const typyEventow = {
    click: "kliknięcie lewym klawiszem myszki",
    mousedown: "naciśnięcie klawisza myszy",
    mouseover: "kursor znalazł się na elemencie",
    mouseout: "kursor opuścił element",
    mouseenter: "kursor znalazł się na elemencie",
    mouseleave: "kursor opuścił element",
    dblclick: "podwójnie klikniemy na element (np. input)",
    change:
      "opuściliśmy element, i zmienił on swoją zawartość (np. pole tekstowe), ale też na zmianę np. selekta, checkboxa itp.",
    submit: "formularz jest wysyłany",
    resize: "rozmiar okna przeglądarki jest zmieniany",
    focus:
      "element stał się aktywny (np. pole tekstowe, odnośnik, button, element z tabindex)",
    blur: "element przestał być aktywny (np. opuściliśmy input)",
    keydown: "naciśnięcie klawisz na klawiaturze",
    keyup: "puszczenie klawisz na klawiaturze",
    keypress: "naciśnięcie klawisza który widać na ekranie (np. literę)",
    input:
      "odpalane gdy coś wpiszemy do pola, wybierzemy coś z selecta, klikniemy na input itp.",
    load: "obiekt został załadowany (np. cała strona, pojedyncza grafika, iframe)",
    contextmenu:
      "kliknięto prawym klawiszem myszki i pojawiło się menu kontekstowe",
    wheel: "odpalane, gdy kręcimy kółkiem myszki",
    select: "zawartość obiektu została zaznaczona",
    unload: "użytkownik opuszcza dana stronę",
    animationstart: "animacja css się rozpoczęła",
    animationend: "animacja css się zakończyła",
    animationiteration: "animacja css zrobi jedną iterację",
    transitionstart: "transition css się zacznie",
    transitionend: "transition css się zakończy",
  };
}
