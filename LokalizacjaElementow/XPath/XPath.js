// Xpath to jezyk sciezek (coś jak c://mojkomputer/programfiles)
// $x("XPATH") - wyszukiwanie w konsoli po XPathach. Zwróci listę wszystkich elementów

{
  /*
        1  <div id="jeden">
        2     <button type="oppo"> text1 </button>
        3        <a> 1111 </a>
        4        <a> 2222 </a.
        5     <button type="reno" class="klasa"> text2 </button>
        6     <button type="samsung"> text5 </button>
        7     <p id="IDS"> text4 </p>
        8        <div class="zolty>
        9            <a class="klasa"> 3333 </a>
        10       </div>
        11      <div class="zielony">
        12            <a> 3333 </a>
        13      </div>
        14 </div>
         */

  ("/div/button/a"); // jeden / na poczatku oznacza ścieżkę bezwzględną a więc musi to być scieżka od samego poczatku htmla (3)(4)
  ("//p/div/a"); // dwa // na początku oznaczają, ze bedzie szukal takiego ukladu w dowolnej czesci htmla (9)(12)
  (".//p/div/a"); // warto przez dwoma slashami dac . poniewaz oznacza ona ze zaczynamy szukac od konkretnego wezla. nie zaszkodzi jak bedzie. w przykladzie ponizej juz musialaby byc
  `"//div/p"  ".//div/a"`; // (9)(12)

  (".//button[@class='klasa']"); // jeżeli chcemy znalezc element o danym arybucie to przed nazwa tego atrybutu trzeba dac @ (5)
  (".//button[@class='klasa' and @type='reno']"); // łączymy emelenty za pomocą słówka and (5)
  (".//*[@class='klasa'"); // * oznacza cokolwiek. Znajdż dowolny element z klasa klasa (5)(9)
  (".//button[@class]"); //znajdź buttony które mają jakąkolwiek klase (5)
  (".//button[@class='']"); // znajdź buttony które mają pustą klasę

  (".//button[contains(@type, 'msun')]"); //znajdż button który w atrubucie type ma msun (6)
  (".//button[starts-with(@class, 'kla'"); // znajdz button ktorego atrybut klasa zaczyna sie na kla (6)
  (".//button[not(@class='klasa')]"); // znajdz button który NIE zawiera klasy klasa

  (".//a[text()='1111']"); // znajdź a które ma w sobie teskt 1111
  ("./button[contains(text(), 'text')]"); // znajdz button króry ma w sobie tekst który zawiera tekst text (2)(5)(6)
}
