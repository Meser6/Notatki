document; //pobiera cały DOM

//pobierajac element pobieramy jego i jego dzieci.
const id = document.getElementByelement("element"); // pobiera element po element (powinno byc unikalne)
const classes = document.getElementsByClassName("CLASS"); // pobiera elementy o danej klasie i dopisuje je do listy
const tags = document.getElementsByTagName("TAG"); // pobiera elementy o danym tagu i dopisuje je do listy
const names = document.getElementsByName("NAME"); // pobiera elementy o danej nazwie i dopisuje je do listy
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

//zamiana istniejacego elementu
lista.replaceChild(newLi, li2); // zamienia element z drugim (nowy, stary) (3)

//usuniecie danego elementu
lista.removeChild(li2);

//MANIPULACJA DOMem
//dane wlasciwosci obiektu dom (jak teskt) sa jego wliwosciami sensu stricte wiec aby je zmienic musimy
//odwolac sie jak do wlasciwosci elementu
const element = document.querySelector("selektor");
element.textContent = "nowy tekst";
element.textContent("to nie zadziala bo to nie metoda!!!");

//tekst
element.innerText = "<br>TEXT</br>"; // podmieni cały teskt elementu i NIE będzie szukał w nim znaczników HTML (wstawi "<br>TEXT</br>")
element.innerHTML = "<br>TEXT</br>"; // podmieni cały teskt elementu i BĘDZIE szukał w nim znaczników HTML (wstawi "TEXT" pogrubione)
element.textContent; // dostep do tekstu elementu
document.querySelector("input").value; // dostep do wartosci wpisanej w inpucie. zwroci stringa. jak bedzie puste to zwroci 0

//css
element.style.backgroudColor = "blue"; // w ten sposob mozemy zmienic css elementu.
//nie bedzie on zmieniony w pliku css a bedzie doposany element w htmlu
//style które maja nazwe np. background-color piszemy w camel case

//EVENTY
//event listner sluzy do nasluchiwania jakichs akcji na danym elemencie i wykonywania instrukcji jesli one wystapia
element.addEventListener("click", () => console.log("cos zrobi"));
// przyjmuje          typ eventu,  funkcje ktora wykona sie gdy ten event nastapi

//typy eventow:
const typyEventow = ["click"];
