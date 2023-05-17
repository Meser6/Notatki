// Zaznaczy wszystkie elementy które spełniają taka konfiguracje.

// dziedzicznie
{
  /*
        1 <div id="jeden">
        2     <button type="oppo">text</button>
        3     <button type="reno">text</button>
        4 </div>
         */
  ("div>button"); // znajdzie wszystkie elementy o tagu button które są bezpośrednimi dziecmi diva (2)
  ("div#jeden>button"); // znajdzie wszystkie elementy o tagu button które są bezpośrednimi dziecmi diva o id jeden (2)
  ("div#jeden>button[type='reno']"); // znajdzie wszystkie elementy o tagu button które są bezpośrednimi dziecmi diva o id jeden (3)
}
// dzieci
{
  /*
        1 <div id="jeden">
        2    <button type="oppo"> text1 </button>
        3    <button type="reno" class="klasa"> text2 </button>
        4    <button type="redmi"> text3 </button>
        5    <p> text4 </p>
        6    <button type="samsung"> text5 </button>
        7    <p id="IDS"> text4 </p>
        8 </div>
         */

  //w nawiasach liczymy od 1, a nie od 0
  ("div#jeden>button:nth-child(2)"); //znajdź buttona który jest drugim od początku dzieckiem diva o tagu jeden (3)
  ("div#jeden>button:nth-child(even)"); //znajdź buttona który jest parzystym dzieckiem diva o tagu jeden (3)
  ("div#jeden>button:nth-child(odd)"); //znajdź buttona który jest nieparzystym dzieckiem diva o tagu jeden (3)
  ("div#jeden>button:nth-last-child(2)"); //znajdź buttona który jest drugim od końca dzieckiem diva o tagu jeden (3)
  ("div#jeden>button:last-child()"); //znajdź buttona który jest ostatnimu dzieckiem diva o tagu jeden (brak)

  ("div#jeden>button:nth-of-type(4)"); //znajdź buttona który jest 4 buttonem (liczac od gory) diva o tagu jeden (6)
  ("div#jeden>button:nth-last-of-type(4)"); //znajdź buttona który jest 4 buttonem (liczac od końca) diva o tagu jeden (6)

  ("div#jeden>p:first-child"); //znajdz element o tagu p który jest pierwszym dzieckiem diva o id jeden (brak)
  ("div#jeden>p:last-child"); //znajdz element o tagu p który jest ostatnim dzieckiem diva o id jeden (7)

  ("div#jeden>p:first-of-type"); //znajdz pierwsze p które jest dzieckiem diva o tagu jeden (5)
  ("div#jeden>p:last-of-type"); //znajdz ostatnie p które jest dzieckiem diva o tagu jeden (7)
  ("div#jeden>p:only-of-type"); //znajdź p  który jest jedynym dzieciem tego typu w divie o id jeden (brak)

  //łączenie jest bardzo proste np.
  ("div#jeden>button.klasa:only-of-type");
}
//rodzenstwo
{
  /*
        1 <div id="jeden">
        2    <button type="oppo"> text1 </button>
        3    <button type="reno" class="klasa"> text2 </button>
        4    <button type="redmi"> text3 </button>
        5    <p> text4 </p>
        6    <button type="samsung"> text5 </button>
        7    <p id="IDS"> text4 </p>
        8 </div>
         */
  ("div#jeden>button+p"); //znajdź p które jest bezpośrednio po buttonie (jako rodzeństwo). Oba elmenty są dziecmi diva o tagu jeden (5)
  ("div#jeden>button+p#IDS"); //znajdź p z id IDS które jest bezpośrednio po buttonie (jako rodzeństwo). Oba elmenty są dziecmi diva o tagu jeden (7)
  ("div#jeden>button.klasa+button"); //znajdź button który jest bezpośrednio po buttonie o klasie klasa (jako rodzeństwo). Oba elmenty są dziecmi diva o tagu jeden (4)
  ("button.klasa+button"); //znajdź button który jest bezpośrednio po buttonie o klasie klasa (jako rodzeństwo). Oba elmenty są dziecmi jakiegoś elemntu (5)

  ("div#jeden>button.klasa~button"); // znajdź wszystkie buttony które są po butonnie z klasa klasa (jako rodzeństwo) i są rodzicami diva o tagu jeden (4)(5)
}
//potomkowie
{
  /*
        1 <div id="jeden">
        2    <button type="oppo"> text1 </button>
        3    <button type="reno" class="klasa"> text2
        4       <p id="dwa"> text4 </p>
        5    </button>
        6    <button type="redmi"> text3 </button>
        7    <p> text4 </p>
        8    <button type="samsung"> text5 </button>
        9    <p id="IDS"> text4 </p>
        10 </div>
         */
  ("div#jeden p#dwa"); //znajdź p o id dwa które jest potomkiem diva o id jeden (dowolnie głęboko zagnieżdzonym) (4)
  ("div#jeden p"); //znajdź wszystkie p które sa potomkami diva o id jeden (dowolnie głęboko zagnieżdzonymi) (4)(7)(9)
}
//not
{
  /*
        1 <div id="jeden">
        2     <button type="oppo" id="ids">text</button>
        3     <button type="reno">text</button>
        4 </div>
         */
  ("button:not(#ids)"); // znajdz wszystkie buttony które NIE mają id ids (3)
  ("button:not([id])"); //znajdź wszystkie buttony które NIE mają żadnego id
}
