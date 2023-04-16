document; //pobiera cały DOM
document.body; //element body

document.all; //kolekcja ze wszystkimi elementami na stronie
document.forms; //kolekcja z formularzami na stronie
document.images; //kolekcja z grafikami img na stronie
document.links; //kolekcja z linkami na stronie
document.anchors; //kolekcja z linkami będącymi kotwicami

//pobierajac element pobieramy jego i jego dzieci.
const id = document.getElementByelement("element"); // pobiera element po element (powinno byc unikalne)
const classes = document.getElementsByClassName("CLASS"); // pobiera elementy o danej klasie i dopisuje je do listy
const tags = document.getElementsByTagName("TAG"); // pobiera elementy o danym tagu i dopisuje je do listy
const names = document.getElementsByName("NAME"); // pobiera elementy o danej nazwie i dopisuje je do listy
//tylko dwa ponizsze sa zalecane
const selector = document.querySelector("CSS_SELECTOR"); // pobiera pierwszy element z danym seletorem css
const selectors = document.querySelectorAll("CSS_SELECTOR"); // pobiera wszystkie elementy z danym selektorem i opisuje do listy

id.parentNode; // pobierze rodzica elementu

/*
1   <ul element="list">
2       <li element="li1">jeden</li>
3       <li element="li2">dwa</li>
4       <li element="li3">trzy</li>
5   </ul>
*/

const lista = document.getElementByelement("list");

lista.firstElementChild; // wyszuka pierwsze dziecko elementu (2)
lista.lastElementChild; // wyszuka ostatnie dziecko elementu (3)

const li2 = document.getElementByelement("dwa");

//dodanie nowego elementu
const newLi = document.createElement("li"); //tworzy w dokumencie nowy element o podanym tagu (ale nigdzie nie dodaje)
const newLiText = document.createTextNode("cztery"); // tworzy w dokumencie tekst (ale nigdzie nie dodaje)
newLi.appendChild(newLiText); // dodaje cos jako dziecko czegoś (na koncu)

lista.appendChild(newLi); // dodaje li jako dziecko do elementu (4-5)
lista.insertBefore(newLi, li2); // dodaje li jako dziecko do elelemtu przed elementem (dodawany, przed czym) (2-3)

lista.appendChild(li2.cloneNode()); // klonuje i dodaje do elementu (lista) dany (li2) element (ale bez jego dzieci!)
lista.appendChild(li.cloneNode(true)); // klonuje i dodaje do elementu (lista) dany (li2) element (z jego dziećmi!)

element.cloneNode(); // sklponuje element ale BEZ podpietych do niego zdarzen

// nowyszy i bardziej polecany sposob dodania elementu do dom
element.append(newLi); //wstawia tekst lub nowy element na koniec danego elementu
element.prepend(newLi); //wstawia tekst lub nowy element na początku danego elementu
element.before(newLi); //wstawia tekst lub nowy element przed danym elementem
element.after(newLi); //wstawia tekst lub nowy element za danym elementem

//zamiana istniejacego elementu
lista.replaceChild(newLi, li2); // zamienia element z drugim (nowy, stary) (3)
lista.replaceWith(newLi);

//usuniecie danego elementu
lista.removeChild(li2);
lista.remove(); // nie zadziala na ie11

//MANIPULACJA DOMem
//dane wlasciwosci obiektu dom (jak teskt) sa jego wliwosciami sensu stricte wiec aby je zmienic musimy
//odwolac sie jak do wlasciwosci elementu
const element = document.querySelector("selektor");
element.textContent = "nowy tekst";
element.textContent("to nie zadziala bo to nie metoda!!!");

//tekst
element.innerText = "<br>TEXT</br>"; // podmieni cały teskt elementu i NIE będzie szukał w nim znaczników HTML (wstawi "<br>TEXT</br>")
element.innerHTML = "<br>TEXT</br>"; // podmieni cały teskt elementu i BĘDZIE szukał w nim znaczników HTML (wstawi "TEXT" pogrubione)
element.textContent; // dostep do tekstu elementu, ale ze stylami, enterami etc
document.querySelector("input").value; // dostep do wartosci wpisanej w inpucie. zwroci stringa. jak bedzie puste to zwroci 0

//css
element.style.backgroudColor = "blue"; // w ten sposob mozemy zmienic css elementu.
//nie bedzie on zmieniony w pliku css a bedzie doposany element w htmlu
//style które maja nazwe np. background-color piszemy w camel case
element.style["backgroud-color"]; // alternatywa
getComputedStyle(element); //zwroci wszystkie style ktore widzi przegladarka (a nie tylko te co sa w inline)
//nie da sie ich nadpisac

//klasy
// klasy dodajemy lub odejmujemy glownie po to zeby manipulowac stylami danego elementu dopisaujac mu
//klase ktora ma dodatkowe style.
element.classList.add("nazwa_klasy");
element.className; // zwroci klasy ktore element posiada
element.className += "klasa1 klasa2"; // sposob na dodanie kilku klas
element.classList.remove("nazwa_klasy");
element.classList.contains("nazwa_klasy"); // zwroci booleana
element.classList.toggle("nazwa_klasy", true); //przełączanie (jak nie ma to dodaje, jak jest to usuwa)klasy.
// Dodatkowy drugi parametr wymusza dodanie (jeżeli jest true) lub usunięcie (jeżeli jest false) klasy.

//atrybuty np. href w a
element.getAttribute("name"); //pobiera wartość danego atrybutu lub zwraca null jeżeli takiego nie ma
element.setAttribute("name", "value"); //ustawia nową wartość atrybutu
element.hasAttribute("name"); //zwraca true/false w zależności czy element ma atrybut o danej nazwie
element.removeAttribute("name"); //usuwa atrybut o danej nazwie
element.toggleAttribute("name"); //dodaje/usuwa dany atrybut

element.dataSet.nowyAtrybut = "nowy"; // doda do elementu nowy atrynbut ktory bedzie mial nazwe data-nowy-atrybut
element.src; // pobierze dany element
element.tagName; // pobierze wartosc tag eleementu

//EVENTY
//event listner sluzy do nasluchiwania jakichs akcji na danym elemencie i wykonywania instrukcji jesli one wystapia
element.addEventListener("click", () => console.log("cos zrobi"));
// przyjmuje          typ eventu,  funkcje ktora wykona sie gdy ten event nastapi
function funkcja() {
  console.log("cos robi");
}
element.addEventListener("moseout", funkcja); // jesli chcemy wywolac jakas funkcje to robimy to bez ()
//bo inaczej wywola sie instant
element.removeEventListener("click", nazwaFunkcji); // usuniecie eventu. nie usunie funkcji anonimowej

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

//mamy diva z naluchiwaniem kliku ktory ma dziecko spana z nasluchiwaniem tego samego
//gdy klikniemy na spana wykona sie jego funkcja + funkcje wszystkich jego rodzicow ktorzy maja takie samo
//nasluchiwanie.
//aby to wylaczyc trzeba podac trzeci parametr
element.addEventListener("click", funkcja, true); // teraz w takiej sytuacji odpali sie tylko span

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
