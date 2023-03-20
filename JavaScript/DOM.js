document; //pobiera cały DOM

//pobierajac element pobieramy jego i jego dzieci.
var id = document.getElementById("ID"); // pobiera element po ID (powinno byc unikalne)
var classes = document.getElementsByClassName("CLASS"); // pobiera elementy o danej klasie i dopisuje je do listy
var tags = document.getElementsByTagName("TAG"); // pobiera elementy o danym tagu i dopisuje je do listy
var names = document.getElementsByName("NAME"); // pobiera elementy o danej nazwie i dopisuje je do listy
var selector = document.querySelector("CSS_SELECTOR") // pobiera pierwszy element z danym seletorem css
var selectors = document.querySelectorAll("CSS_SELECTOR") // pobiera wszystkie elementy z danym selektorem i opisuje do listy


id.innerText = "<br>TEXT</br>"; // podmieni cały teskt elementu i NIE będzie szukał w nim znaczników HTML (wstawi "<br>TEXT</br>")
id.innerHTML = "<br>TEXT</br>"; // podmieni cały teskt elementu i BĘDZIE szukał w nim znaczników HTML (wstawi "TEXT" pogrubione)
id.parentNode; // pobierze rodzica elementu
/*
1   <ul id="list">
2       <li id="li1">jeden</li>
3       <li id="li2">dwa</li>
4       <li id="li3">trzy</li>
5   </ul>
*/

var lista = document.getElementById("list");

lista.firstElementChild // wyszuka pierwsze dziecko elementu (2)
lista.lastElementChild // wyszuka ostatnie dziecko elementu (3)

var li2 = document.getElementById("dwa");
//dodanie nowego elementu

var newLi = document.createElement("li"); //tworzy w dokumencie nowy element o podanym tagu (ale nigdzie nie dodaje)
var newLiText = document.createTextNode("cztery"); // tworzy w dokumencie tekst (ale nigdzie nie dodaje)
newLi.appendChild(newLiText); // dodaje cos jako dziecko czegoś (na koncu)

lista.appendChild(newLi); // dodaje li jako dziecko do elementu (4-5)
lista.insertBefore(newLi, li2); // dodaje li jako dziecko do elelemtu przed elementem (dodawany, przed czym) (2-3)

lista.appendChild(li2.cloneNode()); // klonuje i dodaje do elementu (lista) dany (li2) element (ale bez jego dzieci!)
lista.appendChild(li.cloneNode(true));// klonuje i dodaje do elementu (lista) dany (li2) element (z jego dziećmi!)

//zamiana istniejacego elementu
lista.replaceChild(newLi, li2); // zamienia element z drugim (nowy, stary) (3)

//usuniecie danego elementu
lista.removeChild(li2);