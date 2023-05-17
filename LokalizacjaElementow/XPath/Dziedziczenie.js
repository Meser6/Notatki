// Zaznaczy wszystkie elementy, które spełniają taka konfiguracje.

//dziedziczenie
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

  // ------------- Dzieci ---------------
  {
    (".//div[@id='jeden']/button[@type='oppo']"); // znajdz butttona o typie oppo ktory jest bezposrednim dzieckiem (nie wazne ktorym) diva o id jeden (2)
    (".//div[@id='jeden']/*"); // znajdz wszystkie bezpośrednie dzieci diva o id jeden (2)(5)(6)(7)
    (".//p/div[2]"); // znajdz wszystikie dzieci p ktore sa divami. wybierz drugi w kolejnosci od góry (11)
    (".//p/*[2]"); // znajdź dowolne drugie dziecko od góry taga p
  }
  // ------------- Potomkowie  ---------------
  {
    (".//div[@id='jeden']//a"); // znajdż dowolnych potomków diva o id jeden które maja tag a (3)(4)(12)
    (".//div[@id='jeden']//div[1]"); // znajdz dowolne divy ktore są pierwzymi divami w swoich hierarchach i sa potomami diva o tagu jeden (8)
  }
  // ------------- Rodzeństwo  -------------
  {
    //liczy tylko rodzenstwo które jest po wyszukiwanym elemencie
    (".//button[@type='oppo']/following-sibling::button"); // znadz rodzenstwo buttona o type oppo które też jest buttonem (5)(6)
    (".//button[@type='reno']/following-sibling::*"); // znajdź wowolne rodzeństwo buttona o type reno (6)(7)
    (".//button[@type='reno']/following-sibling::*[1]"); // znajdz pierwsze rodzenstwo button o typie reno (6)
    (".//button[@type='reno']/following-sibling::*p[1]"); // znajdz pierwsze rodzenstwo button o typie reno (6) które jest typem p
  }
  // ------------- Rodzice  -------------
  {
    (".//div[@class='zolty']/.."); // znadź rodzica elementu div o klasie zolty (7)
    (".//div[@class='zolty']/parent::*"); // znadź rodzica elementu div o klasie zolty (7)
    (".//div[@class='zolty']/parent::button"); // jak nie rodzic nie bedzie takiego typu jak podany to zwróci pusty (brak)
  }
  // ------------- Przodkowie  -------------
  {
    (".//div[@class='zolty'/ancestor::*"); // znajdź dowlnych przodków diva o klasie zolty (7)(1)
    (".//div[@class='zolty'/ancestor::div"); // znajdź dowlnych przodków diva o klasie zolty  którzy są divami (1)
  }
}
