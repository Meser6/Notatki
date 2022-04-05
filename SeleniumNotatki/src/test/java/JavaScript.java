import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class JavaScript {

    //żeby umieć korzystać z JavaScriptów w Selenium trzeba najpierw znać JavaScript xD

    //Dzieki wykorzystaniu JavaScriptow można zrobic wiele rzeczy które byłyby niedostepne z poziomu seleniu,

    WebDriver driver;

    @Test
    void js() {
        //Aby zacząć wywoływać JavaScripty trzeba najpierw zrzutowac drivera na JavascpritExecutor
        JavascriptExecutor js = (JavascriptExecutor) driver;
        //Teraz możemy wywoływać skrypty

        //ogólny zapis
        // Jako argumenty moż na przekazać: Number, Boolean, String, WebElement, List
        js.executeScript("skrypt", "argument", "argument");

        //Wpisanie czegoś w konsole
        js.executeScript("console.log('cos');");

        //Skrolowanie o dana dlugosc
        js.executeScript("window.scrollBy(0,600)");

        // skroluj az dany element bedzie widoczny
        WebElement element1 = driver.findElement(By.cssSelector("xd"));
        js.executeScript("arguments[0].scrollIntoView()", element1);


        //Zwracanie domeny
        String domain = (String) js.executeScript("return document.domain");

        //Pobranie tekstu z elementu (nawet jak jest niewidoczny)
        WebElement element2 = driver.findElement(By.cssSelector("xd"));
        String text = (String) js.executeScript("return arguments[0].text", element2);
        //czyt. wejdz w element (argument 0), pobierz tekst. zwroc artosc i rzutuj go na stringa.


        /**                 TYPY ZWRACANE
         * Co zwraca JavaScript         Co dostajemy w Javie
         * null/brak wartosci           null
         * element HTML                 WebElement
         * decimal                      double
         * liczna inna niz decimal      long
         * Boolean                      Boolean
         * Array                        List
         * Cała reszta                  string
         */
    }

    @Test
    void alety() {
        JavascriptExecutor js = (JavascriptExecutor) driver;

        //wywołanie ramki typu alert (z OK)
        js.executeScript("alert('alert text')");

        //wywołanie ramki typu confirm (z OK i CANCEL)
        js.executeScript("confirm('text')");

        //wywołanie ramki typu prompt (z tekstem do wpisania)
        js.executeScript("prompt('text')");
    }
}
