package Lokalizacja.XPath;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class XPath {

    WebDriver driver;

    // Xpath to jezyk sciezek (coś jak c://mojkomputer/programfiles)
    // $x("XPATH") - wyszukiwanie w konsoli po XPathach. Zwróci listę wszystkich elementów

    @Test
    void Xpath() {
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

        driver.findElements(By.xpath("/div/button/a")); // jeden / na poczatku oznacza ścieżkę bezwzględną a więc musi to być scieżka od samego poczatku htmla (3)(4)
        driver.findElement(By.xpath("//p/div/a")); // dwa // na początku oznaczają, ze bedzie szukal takiego ukladu w dowolnej czesci htmla (9)(12)
        driver.findElement(By.xpath(".//p/div/a")); // warto przez dwoma slashami dac . poniewaz oznacza ona ze zaczynamy szukac od konkretnego wezla. nie zaszkodzi jak bedzie. w przykladzie ponizej juz musialaby byc
        driver.findElement(By.xpath("//div/p")).findElement(By.xpath(".//div/a")); // (9)(12)

        driver.findElement(By.xpath(".//button[@class='klasa']")); // jeżeli chcemy znalezc element o danym arybucie to przed nazwa tego atrybutu trzeba dac @ (5)
        driver.findElement(By.xpath(".//button[@class='klasa' and @type='reno']")); // łączymy emelenty za pomocą słówka and (5)
        driver.findElement(By.xpath(".//*[@class='klasa'")); // * oznacza cokolwiek. Znajdż dowolny element z klasa klasa (5)(9)
        driver.findElement(By.xpath(".//button[@class]")); //znajdź buttony które mają jakąkolwiek klase (5)
        driver.findElement(By.xpath(".//button[@class='']")); // znajdź buttony które mają pustą klasę

        driver.findElement(By.xpath(".//button[contains(@type, 'msun')]")); //znajdż button który w atrubucie type ma msun (6)
        driver.findElement(By.xpath(".//button[starts-with(@class, 'kla'")); // znajdz button ktorego atrybut klasa zaczyna sie na kla (6)
        driver.findElement(By.xpath(".//button[not(@class='klasa')]")); // znajdz button który NIE zawiera klasy klasa

        driver.findElement(By.xpath(".//a[text()='1111']")); // znajdź a które ma w sobie teskt 1111
        driver.findElement(By.xpath("./button[contains(text(), 'text')]")); // znajdz button króry ma w sobie tekst który zawiera tekst text (2)(5)(6)

    }
}
