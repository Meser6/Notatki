
// Selektory CSS wyszukują po stylach
// $$("SELEKTOR-CSS") - wyszukiwanie w konsoli po CSSach. Zwróci listę wszystkich znalezionych elementów
// Bierze pod uwagę wielkość liter

// -------- wyszukanie po tagu  --------

//<button>text</button>
"button";

// -------- wyszukiwanie po id  --------

//<button id="jakies-id">text</button>
"#jakies-id"; //znajdzie wszystkie obiekty które maja w sobie takie id - nawet jak mają wiecej ich wiecej
"button#jakies-id"; //znajdzie obiekty o tagu button które maja w sobie takie id - nawet jak mają wiecej ich wiecej
"[id='jakieś-id]"; //znajdzie wszystkie obiekty które maja dokładnie takie id - nie znajdzie obiektow ktore mają ten i jeszce jakies
"button[id='jakieś-id]"; //znajdzie obiekty o tagu button które maja dokładnie takie id - nie znajdzie obiektow ktore mają ten i jeszce jakies
//<button id="jakies-id id-2">text</button>
"[id='jakieś-id id-2]"; //znajdzie wszystkie obiekty które maja dokładnie takie dwa id w takiej kolejnosci - nie znajdzie obiektow ktore mają te i jeszce jakies
"button[id='jakieś-id id-2]"; //znajdzie wszystkie obiekty o tagu button które maja dokładnie takie dwa id w takiej kolejnosci - nie znajdzie obiektow ktore mają te i jeszce jakies

// -------- wyszukiwanie po klasie  --------

//<button class="jakas-klasa">tekst</button>
".jakas-klasa"; //znajdzie wszystkie obiekty które maja w sobie takia klase - nawet jak mają wiecej ich wiecej
"button.jakas-klasa"; //znajdzie obiekty o tagu button które maja w sobie takią klase - nawet jak mają wiecej ich wiecej
"[class='jakas-klasa"; //znajdzie wszystkie obiekty które maja dokładnie taką klase - nie znajdzie obiektow ktore mają tą i jeszce jakies
"button[class='jakas-klasa'"; //znajdzie obiekty o tagu button które maja dokładnie taką klase - nie znajdzie obiektow ktore mają tą i jeszce jakies
//<button class="jakas-klasa klasa-2">tekst</button>
"[clss='jakas-klasa klasa-2']"; //znajdzie wszystkie obiekty które maja dokładnie takie dwie klasy w takiej kolejnosci - nie znajdzie obiektow ktore mają te i jeszce jakies
"button[clss='jakas-klasa klasa-2']"; //znajdzie wszystkie obiekty o tagu button które maja dokładnie takie dwie klasy w takiej kolejnosci - nie znajdzie obiektow ktore mają te i jeszce jakies
"button.jakas-klasa.klasa-2"; //znajdzie wszystkie obiekty o tagu button które maja dokładnie takie dwie klasy BEZ WZGLEDY NA KOLEJNOSC - nie znajdzie obiektow ktore mają te i jeszce jakies

// -------- wyszukiwanie po fragmencie wartosci atrybutu  --------
//wyszukuje w ten sposob ze wartość, niezaleznie jaka wrzuca do stringa i potem szyka w tym stringu
//<button class="jakas-klasa klasa-2 kl kl2">tekst</button>
"[class*='as-kl'"; // znajdzie wszystkie obiekty które maja w danym atrubucie ten ciąg znaków
"[class^='jak'"; // znajdzie wszystkie obiekty których atrubut zaczyna się od tego ciągu znaków
"[class$='a-2'"; // znajdzie wszystkie obiekty których atrubut kończy się na tym ciągu znaków
"[class~='kl'"; // znajdzie wszystkie obiekty których atrubut ma w sobie ten ciąg znaków i jest on rozdzielony spacjami
"[class|='jakas'"; // znajdzie wszystkie obiekty których atrubut zaczyna się od tego ciagu znaków a po nim jest myślnik


// tak na prawde przy pomocy nawiasów kwadratowych mozna szukac po dowolnym elemencie
// wyszukiwanie z nawiasami kwadratowymi zawsze znajdzie obiekty ktore mają dokładnie taka wartość
//<button class="jakas-klasa" href="ppoo" costam="xd">tekst</button>
"[costam='xd']";
"[href='ppoo']";

// znajdz elemenent który ma dany atrybut
//<button class="jakas-klasa" href="ppoo" costam="xd">tekst</button>
"button[costam]"; // znajdzie elementy które maja w sobie atrybut costam

// można dowolnie łączyć selektory. nie będzie brana pod uwage kolejność ich podwania
//<button class="jakas-klasa" id="jakies-id href="ppoo" costam="xd">tekst</button>
".jakas-klasa#jakies-id";
"[href='ppoo'].jakas-klasa";
"button#jakies-id[costam='xd']";

// przy wyszukaniu po stylu trzeba szukać po całej warsości (przynajmniej w przykladzie ponizej)
//<button style="jeden; dwa; trzy">tekst</button>
"style='jeden; dwa; trzy'";

