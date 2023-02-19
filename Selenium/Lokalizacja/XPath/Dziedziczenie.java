package Lokalizacja.XPath;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Dziedziczenie {

    // Zaznaczy wszystkie elementy, które spełniają taka konfiguracje. Jeśli używamy FindElement to ofc złapie pierwszy

    WebDriver driver;

    @Test
    void dziedziczenie() {
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
        driver.findElement(By.xpath(".//div[@id='jeden']/button[@type='oppo']")); // znajdz butttona o typie oppo ktory jest bezposrednim dzieckiem (nie wazne ktorym) diva o id jeden (2)
        driver.findElement(By.xpath(".//div[@id='jeden']/*")); // znajdz wszystkie bezpośrednie dzieci diva o id jeden (2)(5)(6)(7)
        driver.findElement(By.xpath(".//p/div[2]")); // znajdz wszystikie dzieci p ktore sa divami. wybierz drugi w kolejnosci od góry (11)
        driver.findElement(By.xpath(".//p/*[2]")); // znajdź dowolne drugie dziecko od góry taga p

        // ------------- Potomkowie  ---------------
        driver.findElement(By.xpath(".//div[@id='jeden']//a")); // znajdż dowolnych potomków diva o id jeden które maja tag a (3)(4)(12)
        driver.findElement(By.xpath(".//div[@id='jeden']//div[1]")); // znajdz dowolne divy ktore są pierwzymi divami w swoich hierarchach i sa potomami diva o tagu jeden (8)

        // ------------- Rodzeństwo  -------------
        //liczy tylko rodzenstwo które jest po wyszukiwanym elemencie
        driver.findElement(By.xpath(".//button[@type='oppo']/following-sibling::button")); // znadz rodzenstwo buttona o type oppo które też jest buttonem (5)(6)
        driver.findElement(By.xpath(".//button[@type='reno']/following-sibling::*")); // znajdź wowolne rodzeństwo buttona o type reno (6)(7)
        driver.findElement(By.xpath(".//button[@type='reno']/following-sibling::*[1]")); // znajdz pierwsze rodzenstwo button o typie reno (6)
        driver.findElement(By.xpath(".//button[@type='reno']/following-sibling::*p[1]")); // znajdz pierwsze rodzenstwo button o typie reno (6) które jest typem p

        // ------------- Rodzice  -------------
        driver.findElement(By.xpath(".//div[@class='zolty']/..")); // znadź rodzica elementu div o klasie zolty (7)
        driver.findElement(By.xpath(".//div[@class='zolty']/parent::*")); // znadź rodzica elementu div o klasie zolty (7)
        driver.findElement(By.xpath(".//div[@class='zolty']/parent::button")); // jak nie rodzic nie bedzie takiego typu jak podany to zwróci pusty (brak)

        // ------------- Przodkowie  -------------
        driver.findElement(By.xpath(".//div[@class='zolty'/ancestor::*")); // znajdź dowlnych przodków diva o klasie zolty (7)(1)
        driver.findElement(By.xpath(".//div[@class='zolty'/ancestor::div")); // znajdź dowlnych przodków diva o klasie zolty  którzy są divami (1)

    }
}
