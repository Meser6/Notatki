import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class Lokalizacja {

    WebDriver driver;

    @Test
    void find() {

        //metoda findElement() służy do znalezienia tylko jednego elemantu i zwraca obiejkt typu WebElement
        //szuka dopóki nie znajdzie. jak znajdzie to reszte olewa. jak nie znajdzie to rzuci wyjatek
        // selektory MUSZĄ (nie technicznie ale jednek) znajdowac tylko jeden element
        driver.findElement(By.className("xx"));

        //metoda findElements() słłuży do szukania wielu obeiktów i zwraca liste znalezionych
        //w liście będą wszystkie znalezione elementy, pokolei. jak nie będzie żadnego to bedzie pusta.
        driver.findElements(By.className("xx"));
    }

    @Test
    void by() {

        //Znajdz po id=""
        driver.findElement(By.id("ID"));


        //Znajdz po name=""
        driver.findElement(By.name("NAME"));

        //Znajdz po class=""
        //jeżeli w klasie sa dwa słowa to są to tak na prawdę dwie klasy tak wyslane nie zostana wyszukane
        //jeżeli wyszukamy klase XXX to znajdzie elementy które jedną lub więcej będą miały XXX
        driver.findElement(By.className("CLASS"));

        //Jeżeli musimy znaleźć element który ma dwie dane klasy (XXX YYY) to możemy to zrobić np w ten sposób
        List<WebElement> webElements = driver.findElements(By.className("XXX"));
        WebElement webElement = null;

        for (WebElement element : webElements) {
            String elementClass = element.getAttribute("class");
            if (elementClass.equals("XXX YYY")) {
                webElement = element;
            }
        }

        //znajdz po tagu np. <div> xx </div>
        driver.findElement(By.tagName("TAG"));

        //znajdz po tekscie hiperlinku
        // <a class="XXX>LINK</a> - tag a oznacza ze jest to hiperlink. będzie szukać po tym co jest w nim (LINK)
        driver.findElement(By.linkText("LINK"));

        //znajdz po cześci tekstu
        driver.findElement(By.partialLinkText("NK"));

    }
}
